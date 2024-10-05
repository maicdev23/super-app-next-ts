"use client"

import { IUser } from "@/app/user/user.interface"
import { addUser, updateUser } from "@/app/user/user.service"
import { useParams, useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

const UserForm = ({ user }: any) => {
    const router = useRouter()
    const params = useParams<{id: string}>()

    const { register, handleSubmit } = useForm<IUser>({
        defaultValues: {
            name: user?.name
        }
    })

    const onSubmit = handleSubmit(async (data) => {
        if (params?.id) {
            await updateUser(params.id, data)
        } else {
            await addUser(data)
        }
        router.push('/')
        router.refresh()
    })

    return <div className="card">
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="User name"
                {...register('name')}
            />
            <button type="submit">
                {params.id ? 'Update' : 'Create'}
            </button>
        </form>
    </div>
}

export default UserForm