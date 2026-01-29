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

export default function Login({ onUserAdded }) {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    const addUser = async () => {
        const newUserData = {
            name: name,
            age: age
        }
        const { error } = await supabase.from("Login").insert([newUserData]).single()

        if (error) {
            console.log("Erro ao adicionar usuario", error)
        } else {
            if (onUserAdded) onUserAdded()
            setName("")
            setAge("")
        }
    }

    return (
        <Card className="w-full max-w-sm text-left">
            <CardHeader>
                <CardTitle className="text-2xl">Registrar</CardTitle>
                <CardDescription>
                    Insira seu nome e idade para se registrar
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" type="text" placeholder="Seu nome" value={name} required onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="age">Idade</Label>
                    <Input id="age" type="number" placeholder="Sua idade" value={age} required onChange={(e) => setAge(e.target.value)} />
                </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
                <Button variant="outline" className="w-full" onClick={addUser}>Registrar</Button>
            </CardFooter>
        </Card>
    )
}
