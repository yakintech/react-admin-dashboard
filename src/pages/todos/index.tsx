import React from 'react'
import { useTodos } from '../../hooks/api/useTodos'

function List() {

    const { todos, loading } = useTodos()

    return <>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>User Name</th>
            </tr>
        </thead>
        <tbody>
            {loading ? <tr><td colSpan={3}>Loading...</td></tr> : todos.map((todo: any) => (
                <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td>{todo.userId}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
}

export default List