import {useState} from 'react'
// array e medodo map inserido mo metodo

const ListRender = () => {
    const [list] = useState(["Sebastian", "Alecssander", "Ayha"]);
    const [users, setUsers] = useState([
        { id: 1, name: "Seraphine", age: 10 },
        { id: 2, name: "Marshall", age: 22 },
        { id: 3, name: "Yuki", age: 12 },
        { id: 4, name: "Connor", age: 16 },
        { id: 5, name: "Mikaella", age: 6 },
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 6);

        setUsers((prevUsers) => {
            console.log(prevUsers);
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    };

    return (
        <div>
            {/* render sem key primeiramente */}
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age} anos
                    </li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    );
};


export default ListRender