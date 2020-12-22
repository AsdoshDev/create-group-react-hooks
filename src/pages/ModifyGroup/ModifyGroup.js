import React, { useState, useEffect } from 'react'
import Button from '../../components/button/Button'
import { Input } from '../../components/input/Input';
import { UserList } from '../../components/user-list/UserList';
import userImage from './../../assets/user.png';
import { Modal } from '../../components/modal/Modal';
import './modify-group.scss';
import PropTypes from 'prop-types';

export const ModifyGroup = ({ addGroup, existingGroup, title }) => {
    const [newGroup, setState] = useState(existingGroup);
    useEffect(
        () => {
            setState(existingGroup)
        },
        [existingGroup]
    )


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
        value: newGroup.name,
        name: "name",
        required: true,
        onChange: e => onInputChange(e)
    }

    const grpDescInput = {
        id: 'desc',
        label: "Group Description",
        name: "desc",
        placeholder: "Enter description",
        value: newGroup.desc,
        onChange: e => onInputChange(e)
    }

    const updateClick = () => {
        const { name, desc, users } = newGroup;
        if (name && desc && users.some(user => user.selected === true) > 0) {
            addGroup(newGroup);
            resetModal();
        }
    }

    const updateBtn = { id: 'update', label: title, onClick: updateClick }


    return (
        <Modal>
            <div id='modifyGroup'>
                <h1 className="header">{title}</h1>
                <div id='groupDtls'>
                    <img alt={'logo'} src={userImage} />
                    <div id="groupFields">
                        <Input props={grpNameInput} />
                        <Input props={grpDescInput} />
                    </div>
                </div>
                {newGroup.users ? <UserList list={newGroup.users} toggleUser={(e, user) => toggleUser(e, user)} /> : null}
                <div className='buttons'>
                    <Button props={updateBtn} />
                </div>
            </div>
        </Modal>
    )
}

ModifyGroup.propTypes = {
    modalTitle: PropTypes.string,
    existingGroup: PropTypes.object
}
