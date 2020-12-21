import { React, useState, useContext } from 'react';
import { ModalContext } from '../../util/context';
import GroupList from '../../components/group-list/GroupList';
import { Input } from '../../components/input/Input';
import './home-page.scss';
import { ModifyGroup } from '../ModifyGroup/ModifyGroup';
import { useFetch } from '../../util/useFetch';
import { API } from '../../util/api';

export const HomePage = () => {

    const MODALS = {
        CREATE_MODAL: "Create Group",
        MODIFY_MODAL: "Modify Group"
    }

    const [state, setState] = useState({
        groups: [],
        filterGroups: [],
        filterInput: '',
        sortDescending: { Name: false, Description: false, Users: false },
        currentGroup: { name: '', desc: '', users: [] },
        modalTitle: MODALS.CREATE_MODAL,
    });

    const modal = useContext(ModalContext);

    useFetch(API.USERS, null, function (response) {

        setState(prevState => {
            return {
                ...prevState,
                currentGroup: {
                    ...prevState.currentGroup,
                    users: response.map(user => (
                        {
                            ...user,
                            selected: false
                        })
                    )
                }
            }
        })
    });

    const filterInputField = {
        id: 'filter',
        name: "search",
        placeholder: "Search groups",
        value: state.filterInput,
        onChange: e => onInputChange(e)
    }


    const addGroup = (group) => {
        const origGroup = state.groups;
        const existingGroup = origGroup.find(grp => grp.name === group.name);
        setState(prevState => {
            const updatedGroups = existingGroup ?
                origGroup.map(grp =>
                    grp.name === group.name ?
                        { ...grp, desc: group.desc, users: group.users }
                        : grp
                )
                :
                [...prevState.groups, { ...group, users: group.users }];

            return {
                ...prevState,
                groups: updatedGroups,
                filterGroups: updatedGroups,
                modalTitle: MODALS.CREATE_MODAL
            };
        });
    }



    const openUpdateModal = (group) => {
        setState(prevState => {
            return {
                ...prevState,
                currentGroup: group,
                modalTitle: MODALS.MODIFY_MODAL
            }
        })
        if (modal.showModal === false)
            modal.toggleModal();
    }


    const removeGroup = (group) => {
        setState(prevState => (
            {
                ...prevState,
                groups: prevState.groups.filter(grp => grp.name !== group.name),
                filterGroups: prevState.groups.filter(grp => grp.name !== group.name),
                modalTitle: MODALS.CREATE_MODAL,
                currentGroup: { name: '', desc: '', users: state.currentGroup.users.map(user => ({ ...user, selected: false })) },
            }));
    }

    const getValueToBeSorted = (value) => {
        return Array.isArray(value) ? value.map(user => user.name).join('') : value;
    }


    const sortGroups = (columnClicked) => {
        const columnMapping = { Name: 'name', Description: 'desc', Users: 'users' }
        const columnToBeSorted = columnMapping[columnClicked]
        let updatedGroups;
        if (state.sortDescending[columnClicked]) {
            updatedGroups = [].concat(state.groups).sort((a, b) => {
                return getValueToBeSorted(a[columnToBeSorted]) > getValueToBeSorted(b[columnToBeSorted]) ? -1 : 1;
            })
        }
        else {
            updatedGroups = [].concat(state.groups).sort((a, b) => {
                return getValueToBeSorted(a[columnToBeSorted]) < getValueToBeSorted(b[columnToBeSorted]) ? -1 : 1;
            })
        }
        setState(prevState => ({
            ...prevState,
            groups: updatedGroups,
            filterGroups: updatedGroups,
            sortDescending: {
                ...prevState.sortDescending,
                [columnClicked]: !state.sortDescending[columnClicked]
            }
        }));

    }


    const onInputChange = (e) => {
        const { value } = e.target;
        setState(prevState => (
            {
                ...prevState,
                filterInput: value,
                filterGroups: prevState.groups.filter(group => group.name.toLowerCase().indexOf(value.toLowerCase()) > -1)
            }
        ))
    }

    return (
        <>
            <header>
                <Input props={filterInputField} />
            </header>
            <GroupList
                list={state.filterGroups}
                updateGroup={openUpdateModal}
                sortGroup={sortGroups}
                removeGroup={removeGroup} />
            <ModifyGroup
                existingGroup={state.currentGroup}
                addGroup={addGroup} title={state.modalTitle} />
        </>
    )
}