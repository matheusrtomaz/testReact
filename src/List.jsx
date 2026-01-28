import { Button } from "@/components/ui/button"
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemTitle,
} from "@/components/ui/item"
import { Trash2 } from "lucide-react"
import { supabase } from "./supabaseClient"

export default function List() {

    const { data: users, error } = supabase.from("Login").select()

    if (error) {
        console.log("Erro ao buscar usuarios", error)
    }

    return (
        <div className="flex w-full max-w-md flex-col gap-6">
            {users?.map(user => (
                <Item variant="outline" key={user.id}>
                    <ItemContent>
                        <ItemTitle>{user.name}</ItemTitle>
                        <ItemDescription>
                            {user.age}
                        </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                        <Button variant="outline" size="sm">
                            <Trash2 className="size-4" />
                        </Button>
                    </ItemActions>
                </Item>
            ))}
        </div>
    )
}
