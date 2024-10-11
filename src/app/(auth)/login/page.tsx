"use client"

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

type Inputs = {
    username: string, password: string
}

const Login = () => {

    const { register, handleSubmit } = useForm<Inputs>()

    const router = useRouter()

    const handleSubmitCredentials = handleSubmit(async (data) => {
        const response: any = await signIn('credentials', {
            username: data.username,
            password: data.password,
            redirect: false
        })

        if (response.error) return alert(response.error)

        router.push('/')
    })

    return (
        <>
            <h1>Login</h1>
            <div className="card">
                <form onSubmit={handleSubmitCredentials}>
                    <input type="text" placeholder="Username"
                        {...register('username')}
                    />

                    <input type="password" placeholder="Password"
                        {...register('password')}
                    />

                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    )
}

export default Login