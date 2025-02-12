import { IUser } from "./user.interface"

const API_PERSON = process.env.NEXT_PUBLIC_API

export async function addUser(user: IUser) {
    const resp = await fetch(`${API_PERSON}/person`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
    })

    if (!resp.ok) throw new Error('Error creating person')

    return await resp.json()
}

//export async function getUsers(): Promise<IUser> {
export async function getUsers() {
    const resp = await fetch(`${API_PERSON}/person`, {
        cache: 'no-store'
    })

    return await resp.json()
}

export async function getUser(id: string) {
    const resp = await fetch(`${API_PERSON}/person/${id}`, {
        cache: 'no-store'
    })

    return await resp.json()
}

export async function updateUser(id: string, user: IUser) {
    const resp = await fetch(`${API_PERSON}/person/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
        cache: 'no-store'
    })

    return await resp.json()
}

export async function deleteUser(id: string) {
    const resp = await fetch(`${API_PERSON}/person/${id}`, {
        method: 'DELETE',
    })

    return await resp.json()
}