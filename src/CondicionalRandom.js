import React, { useState } from 'react'
//Executando várias funções em um click!
const CondicionalRandom = () => {
    {/*simples*/ }
    const [x] = useState(false);
    {/*if else*/ }
    const [name, setName] = useState("Perola")
  return (
    <div>
        {/*simples*/}
        <h1>Isso será exibido?</h1>
        {x && <p> se x for true, sim!</p>}
        {!x && <p>agora  x é falso</p>}
        {/*if else*/}
        <h1>If Ternario</h1>
          {name === "Edric Blight" ? (
            <div>
                <p>O nome é Edric</p>
            </div>
          ) : (
            <div>
                Nome não encontrado!
            </div>
          )}
          <button onClick={() => setName("Edric Blight")}>Clique aqui</button>
    </div>
  );
};

export default CondicionalRandom