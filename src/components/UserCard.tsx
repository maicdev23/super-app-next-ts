"use client"

import { deleteUser } from "@/app/user/user.service"
import { useRouter } from "next/navigation"

const UserCard = ({ user }: Record<string, any>) => {
    const router = useRouter()

    const handleRemoveUser = async (id: string) => {
        await deleteUser(id); router.refresh()
    }

    return <div className="card">
        <li>{user.name}</li>
        <button onClick={() => {
            handleRemoveUser(user.id)
        }}>Remove</button>
        <button onClick={() => {
            router.push(`/user/save/${user.id}`)
        }}>Update</button>
    </div>
}

export default UserCard