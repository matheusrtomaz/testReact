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
export default function List({ users, onUserDeleted }) {

    const deleteUser = async (id) => {
        const { error } = await supabase.from("Login").delete().eq("id", id)

        if (error) {
            console.log("Erro ao deletar usuario", error)
        } else {
            console.log("Usuario deletado com sucesso")
            if (onUserDeleted) {
                onUserDeleted()
            }
        }
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
                        <Button variant="outline" size="sm" onClick={() => deleteUser(user.id)}>
                            <Trash2 className="size-4" />
                        </Button>
                    </ItemActions>
                </Item>
            ))}
        </div>
    )
}
