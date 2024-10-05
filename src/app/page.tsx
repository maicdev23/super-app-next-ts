import Link from "next/link";
import { getUsers } from "./user/user.service";
import UserCard from "@/components/UserCard";

export default async function Home() {
  const users: Record<string, any>[] = await getUsers()

  return (
    <div>
      <div className="d-flex">
        <h1>Hola mundo</h1>
        <button><Link href="/user/save">Save user</Link></button>
      </div><hr />
      <h2>Usuarios</h2>
      <ul>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}
