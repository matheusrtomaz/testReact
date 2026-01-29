import './App.css'
import Login from "./Login"
import List from "./List"
import { FieldSeparator } from "@/components/ui/fieldset"
import { useEffect, useState, useCallback } from "react"
import { supabase } from "./supabaseClient"

function App() {
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
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
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

export default App
