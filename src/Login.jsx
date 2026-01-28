import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { supabase } from "./supabaseClient"

export default function Login() {
    const [name, setName] = useState([])
    const [age, setAge] = useState("")

    const fetchUsers = async () => {
        const { data, error } = await supabase.from("Login").select("*")

        if (error) {
            console.log("Erro ao buscar usuarios", error)
        } else {
            setName(data)
            setAge("")
        }
    }

    const addUser = async () => {
        const newUserData = {
            name: name,
            age: age
        }
        const { data, error } = await supabase.from("Login").insert([newUserData]).single()

        if (error) {
            console.log("Erro ao adicionar usuario", error)
        } else {
            setName((prev) => [...prev, data])
            setAge("")
        }
    }

    return (
        <Card className="w-full max-w-sm text-left">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                    Enter your name and age to register
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="text" placeholder="m@example.com" value={name} required onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="age">Age</Label>
                    <Input id="age" type="number" value={age} required onChange={(e) => setAge(e.target.value)} />
                </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
                <Button className="w-full" onClick={addUser}>Sign in</Button>
                <Button variant="outline" className="w-full">
                    Login with Google
                </Button>
            </CardFooter>
        </Card>
    )
}
