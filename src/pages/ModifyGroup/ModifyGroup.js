import React, { useState, useEffect } from 'react'
import Button from '../../components/button/Button'
import { Input } from '../../components/input/Input';
import { UserList } from '../../components/user-list/UserList';
import userImage from './../../assets/user.png';
import { Modal } from '../../components/modal/Modal';
import './modify-group.scss';
import { useFetch } from '../../util/useFetch';
import { API } from '../../util/api';


export const ModifyGroup = ({ addGroup, existingGroup }) => {

    // function initiateGroup() {
    //     console.log(existingGroup)
    //     if (existingGroup)
    //         return { name: existingGroup.name, desc: existingGroup.desc, users: existingGroup.users };
    //     return { name: '', desc: '', users: [] };
    // }
    console.log("MODIFY RENDERED")

    const [group, setState] = useState(existingGroup);

    useEffect(
        () => {
            setState(existingGroup)
        },
        [existingGroup]
    )

    useFetch(API.USERS, null, function (response) {
        setState(prevState => (
            {
                ...prevState,
                users: prevState.users.length === 0 ? response.map(user => (
                    {
                        ...user,
                        selected: false
                    })
                ) : existingGroup.users
            }
        ))
    });

    const resetModal = () => {
        setState(prevState =>
            ({
                users: prevState.users.map(user => ({ ...user, selected: false })),
                name: "",
                desc: "",
            })
        );
    }

    function updateUsers(users, currentUser) {
        currentUser.selected = !currentUser.selected
        let existingUser = users.find(usr => usr.id === currentUser.id);
        if (existingUser) {
            return users.map(usr =>
                usr.id === currentUser.id ?
                    { ...usr, selected: !currentUser.selected }
                    : usr)

        }
        else {
            return [...users, currentUser]
        }
    }

    function toggleUser(event, user) {
        setState(prevState => (
            {
                ...prevState,
                users: updateUsers(prevState.users, user)
            }
        ))
    }

    function onInputChange(evt) {
        const { name, value } = evt.target;
        setState(prevState => ({ ...prevState, [name]: value }))
    }

    const grpNameInput = {
        id: 'name',
        label: "Name",
        placeholder: "Enter name",
        value: group.name,
        name: "name",
        onChange: e => onInputChange(e)
    }

    const grpDescInput = {
        id: 'desc',
        label: "Group Description",
        name: "desc",
        placeholder: "Enter description",
        value: group.desc,
        onChange: e => onInputChange(e)
    }

    const updateClick = () => {
        addGroup(group);
        resetModal();
    }

    const updateBtn = { id: 'update', label: 'Update Group', onClick: updateClick }


    return (
        <Modal>
            <div id='createGroup'>
                <h1 className="header">Modify Group</h1>
                <div id='groupDtls'>
                    <img alt={'logo'} src={userImage} />
                    <div id="groupFields">
                        <Input props={grpNameInput} />
                        <Input props={grpDescInput} />
                    </div>
                </div>
                {group.users ? <UserList list={group.users} toggleUser={(e, user) => toggleUser(e, user)} /> : null}
                <div className='buttons'>
                    <Button props={updateBtn} />
                </div>
            </div>
        </Modal>
    )
}
