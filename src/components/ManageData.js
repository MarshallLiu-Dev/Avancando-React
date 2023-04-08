import { useState } from 'react';
const ManageData = () =>{
    let somaData = 10;

    console.log(somaData);

    const [number, setNumber] = useState(15);

    console.log(number);
    return (
        <div>
            <div>
                <p>Valor: {somaData}</p>
                <button onClick={() => (somaData = 15)}>Mudar valor</button>
            </div>
            <div>
                <p>valor: {number}</p>
                <button onClick={() => setNumber(25)}>Mudar state:</button>
            </div>
        </div>
    )
}




export default ManageData;