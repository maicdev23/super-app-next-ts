import { IUser } from "./user.interface"

const rest_user = process.env.NEXT_PUBLIC_API

export async function addUser(user: IUser) {
    const resp = await fetch(`${rest_user}/user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
    })

    if (!resp.ok) throw new Error('Error creating user')

    return await resp.json()
}

//export async function getUsers(): Promise<IUser> {
export async function getUsers() {
    const resp = await fetch(`${rest_user}/user`, {
        cache: 'no-store'
    })

    return await resp.json()
}

export async function getUser(id: string) {
    const resp = await fetch(`${rest_user}/user/${id}`, {
        cache: 'no-store'
    })

    return await resp.json()
}

export async function updateUser(id: string, user: IUser) {
    const resp = await fetch(`${rest_user}/user/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
        cache: 'no-store'
    })

    return await resp.json()
}

export async function deleteUser(id: string) {
    const resp = await fetch(`${rest_user}/user/${id}`, {
        method: 'DELETE',
    })

    return await resp.json()
}