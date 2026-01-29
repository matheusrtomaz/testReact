import React, { useState, useEffect, useCallback } from 'react'
import Login from "../Login"
import List from "../List"
import { FieldSeparator } from "@/components/ui/fieldset"
import { supabase } from "../supabaseClient"

const RegisterPage = () => {
    const [users, setUsers] = useState([])

    const fetchUsers = useCallback(async () => {
        const { data, error } = await supabase.from("Login").select("*")

        if (error) {
            console.log("Erro ao buscar usuarios", error)
        } else {
            console.log("Usuarios buscados:", data)
            setUsers(data)
        }
    }, [])

    useEffect(() => {
        fetchUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="flex flex-col items-center justify-center gap-4 mt-10">
            <Login onUserAdded={fetchUsers} />
            <div className="w-[382.4px]">
                <FieldSeparator />
            </div>
            <div className="w-[382.4px]">
                <List users={users} onUserDeleted={fetchUsers} />
            </div>
        </div>
    )
}

export default RegisterPage
