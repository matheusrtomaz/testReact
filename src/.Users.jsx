export default function Users() {

    const users = [
        { id: 1, name: "John Doe", age: 30 },
        { id: 2, name: "Jane Doe", age: 25 },
        { id: 3, name: "John Doe", age: 35 },
    ]

    return (
        <div>
            {users.map(user => (
                <div>
                    <p>{user.name}</p>
                    <p>{user.age}</p>
                </div>
            ))}
        </div>
    )
}