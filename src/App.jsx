import './App.css'
import Login from "./Login"
import List from "./List"
import { FieldSeparator } from "@/components/ui/fieldset"

function App() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <Login />
      <div className="w-[382px]">
        <FieldSeparator />
      </div>
      <div className="w-[382px]">
        <List />
      </div>
    </div>
  )
}

export default App
