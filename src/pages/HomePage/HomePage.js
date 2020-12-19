import { React, useState, useContext } from 'react';
import { CreateGroup } from '../CreateGroup/CreateGroup';
import Button from '../../components/button/Button';
import { ModalContext } from '../../util/context';
import GroupList from '../../components/group-list/GroupList';
import { Input } from '../../components/input/Input';
import './home-page.scss';

export const HomePage = () => {

    const [state, setState] = useState({
        groups: [],
        filterGroups: [],
        filterInput: '',
        sortDescending: { Name: false, Description: false, Users: false }
    });

    const modal = useContext(ModalContext);

    const createGrpBtn = {
        id: 'update',
        label: 'Create Group',
        onClick: modal.toggleModal
    }
    const filterInputField = {
        id: 'filter',
        name: "search",
        placeholder: "Search groups",
        value: state.filterInput,
        onChange: e => onInputChange(e)
    }

    const getSelectedUsers = (group) => group.users.filter(user => user.selected);

    const addGroup = (group) => {
        const origGroup = state.groups;
        const existingGroup = origGroup.find(grp => grp.name === group.name);
        let selectedUsers = getSelectedUsers(group)

        setState(prevState => {
            const updatedGroups = existingGroup ?
                origGroup.map(grp =>
                    grp.name === group.name ?
                        { ...grp, desc: group.desc, users: selectedUsers }
                        : grp
                )
                :
                [...prevState.groups, { ...group, users: selectedUsers }];

            return {
                ...prevState,
                groups: updatedGroups,
                filterGroups: updatedGroups
            };
        });
    }

    const updateGroup = (group) => {
        modal.toggleModal();
    }


    const removeGroup = (group) => {
        setState(prevState => (
            {
                ...prevState,
                groups: prevState.groups.filter(grp => grp.name !== group.name),
                filterGroups: prevState.groups.filter(grp => grp.name !== group.name)
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
                filterGroups: prevState.groups.filter(group => group.name.indexOf(value) > -1)
            }
        ))
    }

    return (
        <>
            <header>
                <Input props={filterInputField} />
                <Button props={createGrpBtn} />
            </header>
            <GroupList
                list={state.filterGroups}
                updateGroup={updateGroup}
                sortGroup={sortGroups}
                removeGroup={removeGroup} />
            <CreateGroup
                addGroup={addGroup}
            />
        </>
    )
}