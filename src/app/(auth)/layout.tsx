"use client"
import {useState} from 'react'
  export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const [state,setState] = useState("");
    return (
        <>
          {children}
          <input type="text" value={state} onChange={(e)=>setState(e.target.value)}/>
        </>

    )
  }
  