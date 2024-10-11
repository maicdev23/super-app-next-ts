"use client"

import { IUser } from "@/app/user/user.interface"
import { addUser, updateUser } from "@/app/user/user.service"
import { useParams, useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

const UserForm = ({ user }: any) => {
    const router = useRouter()
    const params = useParams<{ id: string }>()

    const { register, handleSubmit } = useForm<IUser>({
        defaultValues: {
            fullname: user?.fullname,
            age: user?.age,
            address: user?.address
        }
    })

    const onSubmit = handleSubmit(async (data) => {
        if (params?.id) {
            await updateUser(params.id, { ...data, age: Number(data.age) })
        } else {
            await addUser({ ...data, age: Number(data.age) })
        }
        router.push('/user'); router.refresh()
    })

    return <div className="card">
        <form onSubmit={onSubmit}>

            <input type="text" placeholder="Fullname" {...register('fullname')} />

            <input type="text" placeholder="Age" {...register('age')} />

            <input type="text" placeholder="Address" {...register('address')} />

            <button type="submit">
                {params.id ? 'Update' : 'Create'}
            </button>
        </form>
    </div>
}

export default UserForm