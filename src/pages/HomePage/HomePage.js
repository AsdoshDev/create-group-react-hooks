import { React, useState, useContext } from 'react';
import { CreateGroup } from '../CreateGroup/CreateGroup';
import Button from '../../components/button/Button';
import { ModalContext } from '../../util/context';
import GroupList from '../../components/group-list/GroupList';
import { Input } from '../../components/input/Input';
import './home-page.scss';

export const HomePage = () => {
    const [state, setState] = useState({ groups: [], filterGroups: [], filterInput: '' });
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

    const addGroup = (group) => {
        const origGroup = state.groups;
        const existingGroup = origGroup.find(grp => grp.name === group.name);
        let selectedUsers = group.users.filter(user => user.selected);

        setState(prevState => ({
            ...prevState,
            groups: existingGroup ?
                origGroup.map(grp =>
                    grp.name === group.name ?
                        { ...grp, desc: group.desc, users: selectedUsers }
                        : grp
                )
                :
                [...prevState.groups, { ...group, users: selectedUsers }],

            filterGroups: existingGroup ?
                origGroup.map(grp =>
                    grp.name === group.name ?
                        { ...grp, desc: group.desc, users: selectedUsers }
                        : grp
                )
                :
                [...prevState.groups, { ...group, users: selectedUsers }],
        }))
    }

    const removeGroup = (group) => {
        setState(prevState => (
            {
                ...prevState,
                groups: prevState.groups.filter(grp => grp.name !== group.name),
                filterGroups: prevState.groups.filter(grp => grp.name !== group.name)
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
            <GroupList list={state.filterGroups} />
            <CreateGroup
                addGroup={addGroup}
                removeGroup={removeGroup}
            />

        </>
    )
}