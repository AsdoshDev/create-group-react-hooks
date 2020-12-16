import { React, useState, useContext } from 'react';
import { CreateGroup } from '../CreateGroup/CreateGroup';
import Button from '../../components/button/Button';
import { ModalContext } from '../../util/context';
import GroupList from '../../components/group-list/GroupList';

export const HomePage = () => {
    const [state, setState] = useState([]);
    const modal = useContext(ModalContext);
    const createGrpBtn = { id: 'update', label: 'Create Group', onClick: modal.toggleModal }

    const addGroup = (group) => {
        const existingGroup = state.find(grp => grp.name === group.name);
        let selectedUsers = group.users.filter(user => user.selected)

        setState(prevState => (
            existingGroup ?
                state.map(grp =>
                    grp.name === group.name ?
                        { ...grp, desc: group.desc, users: selectedUsers }
                        : grp
                )
                :
                [...prevState, { ...group, users: selectedUsers }]
        ))
    }

    const removeGroup = (group) => {
        setState(prevState => (prevState.filter(grp => grp.name !== group.name)))
    }

    return (
        <>
            <Button props={createGrpBtn}></Button>

            <CreateGroup
                addGroup={addGroup}
                removeGroup={removeGroup}
            />


            <GroupList list={state} />
        </>
    )
}