"use client";

import { signOut, useSession } from "next-auth/react";

const HomeUser = () => {
    const { data: session, status } = useSession();

    if (status === "loading") return <p>Loading...</p>;

    const getPosts = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/publicacion`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${session?.user?.token}`,
            },
        });
        const data = await res.json();
        console.log(data);
    };

    return (
        <div>
            <div className="d-flex">
                <button
                    onClick={() => signOut()}
                    className="btn btn-danger"
                >
                    Sign out
                </button>
                <button
                    onClick={getPosts}
                    className="btn btn-primary"
                >
                    Get Posts
                </button>
            </div>
            <pre className="card">
                <code>{JSON.stringify(session, null, 2)}</code>
            </pre>
        </div>
    );
};
export default HomeUser;