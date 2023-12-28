"use client"
export default function ErrorLogin({error} : {error:Error}){
    return <h1>{error.message}</h1>
}