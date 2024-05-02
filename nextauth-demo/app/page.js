"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  console.log(session)
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button className="border-2 p-1 m-1" onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button className="border-2 p-1 m-1" onClick={() => signIn()}>Sign in</button>
    <button className="border-2 p-1 m-1" onClick={() => signIn("github")}>Sign in using github</button>
  </>
}