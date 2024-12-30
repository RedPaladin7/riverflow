import { useAuthStore } from "@/store/Auth"
import { useRouter } from "next/router"
import React, {useEffect} from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
    const {session} = useAuthStore()
    const router = useRouter()

    useEffect(()=>{
        if(session){
            router.push('/')
        }
    },[session, router])

    if(session){
        return null
    }

    return (
        <div>
            <div>{children}</div>
        </div>
    )
    // if you do not have session load the children elements
    // children elements are login and create account
}

export default Layout