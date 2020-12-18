import React from 'react'
import './group-list.styles.scss';

export default function GroupList({ list }) {


    const styles = {
        width: 600
    }

    return (
        <table style={styles}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Users</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((group, index) =>
                        <tr key={index}>
                            <td>{group.name}</td>
                            <td>{group.desc}</td>
                            <td>{group.users && group.users.length > 0 ? group.users.map(usr => usr.name).join(', ') : null}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}
