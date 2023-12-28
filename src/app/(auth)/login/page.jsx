import Link from 'next/link'
export default function Login(){
    throw new Error("Error loading login page")
    return <>
        <h1>Login</h1>
        <Link href='/'>Home</Link>
        <Link href='/register'>Register</Link>
    </>
}   