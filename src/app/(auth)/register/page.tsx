"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterPage = () => {
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const resp = await fetch(
            `${process.env.NEXT_PUBLIC_API}/user`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            }
        );

        const data = await resp.json()
        alert(data.msg)

        router.push("/login");
    };

    return (
        <div>
            <h1>Register</h1>
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};
export default RegisterPage;