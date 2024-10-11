import Link from "next/link"
import { getUsers } from "./user.service"
import UserCard from "@/components/UserCard"

async function Person() {
    const users: Record<string, any>[] = await getUsers()
    return (
        <>
            <div className="d-flex">
                <button><Link href="/">Home</Link></button>
                <button><Link href="/user/save">Save user</Link></button>
            </div><hr />
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </>
    )
}

export default Person