import UserForm from "@/components/UserForm";
import Link from "next/link";
import { getUser } from "../user.service";

export default async function Personave({ params }: any) {
    const user = await getUser(params.id)

    return (
        <>
            <div className="d-flex">
                <h2>{params.id ? 'Update User' : 'Save User'}</h2>
                <button><Link href="/user">Usuarios</Link></button>
            </div><hr />
            <UserForm user={user} />
        </>
    )
}