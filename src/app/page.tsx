import HomeUser from "@/components/HomeUser";
import Link from "next/link";

export default async function Home() {

  return (
    <div>
      <div className="d-flex">
        <h1>Hola mundo</h1>
        <button><Link href="/user">Usuarios</Link></button>
      </div><hr />
      <HomeUser />
    </div>
  );
}
