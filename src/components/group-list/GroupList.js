import React from 'react'

export default function GroupList({ list }) {
    console.log(list);
    return (
        <div>
            <table>
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
        </div>
    )
}
