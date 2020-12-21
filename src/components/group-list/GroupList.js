import React from 'react'
import './group-list.styles.scss';
import Button from '../button/Button';

export default function GroupList({ list, updateGroup, removeGroup, sortGroup }) {

    const updateBtn = { id: 'update', label: 'Update', onClick: (e, group) => updateGroup(e, group) }
    const removeBtn = { id: 'remove', label: 'Remove' }

    const header = ["Name", "Description", "Users", "Update", "Remove"].map((label, index) => <th key={index} onClick={e => sortGroup(label)}>{label}</th>)

    return (
        <table >
            <thead>
                <tr>
                    {header}
                </tr>
            </thead>
            <tbody>
                {
                    list.map((group, index) =>
                        <tr key={group.name}>
                            <td>{group.name}</td>
                            <td>{group.desc}</td>
                            <td>{group.users && group.users.length > 0 ? group.users.filter(user => user.selected === true).map(usr => usr.name).join(', ') : null}</td>
                            <td><Button props={{ ...updateBtn, onClick: e => updateGroup(group) }} /></td>
                            <td><Button props={{ ...removeBtn, onClick: e => removeGroup(group, e) }} /></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}
