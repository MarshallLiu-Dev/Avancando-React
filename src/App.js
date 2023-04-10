import './App.css';
import CondicionalRandom from './CondicionalRandom';
import CarDetalis from './components/CarDetalis';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import {useState} from "react"

import Fragment from './components/Fragment';
 {/*Imagens em assets*/}
//import League from './assets/league-of-legends-k-da-seraphine-all-out-splash-arts-wallpaper-5120x2160_16.jpg';

function App() {


  //const name = "JJ"
  const [userName] = useState("Havila");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 ,newCar: true },
    { id: 2, brand: "KIA", color: "Branco", km: 200000, newCar: false },
    { id: 3, brand: "Renault", color: "Azul", km: 32000, newCar: false },
  ]



  return (
    <div className="App">

      <h1>Avançando em React</h1>

      <p>Estou muito animado com o que estamos avançando em react nesse modulo! Aprendemos alguns conceitos basicos com criação do projeto, 
        eventos, componentes, jsx e hierarquia.</p>
      <p>Esses são fundamentais para desenvolver aplicações web dinâmicas e interativas.</p>
      <p> Agora podemos criar interfaces mais complexas e reutilizáveis com react. Vamos continuar praticando e explorando as possibilidades desse framework incrível!</p>
     {/*Imagens em public*/}
     <div>
        <img src="\Imagem do WhatsApp de 2023-04-10 à(s) 11.29.38.jpg" alt="Logic Board MacBook Air M1" />
     </div>
      {/*Imagens em public*/}
      {/*Imagens em assets*/}
      {/*<img src={League} alt="" />*/}
    
    <ManageData/>
    <ListRender/>
    <CondicionalRandom/>
    {/*Props */}
    <ShowUserName name={userName}/>
    {/*Destructuring strings entre aspas valores numericos sõo entre chaves */}
      <CarDetalis brand="Tesla Model S" color="White" km={0} newCar={true} />
      {/*Reaproveitamento */}
      <CarDetalis brand="Tesla Model 3" color="Vermenlho" km={100} newCar={false} />
      <CarDetalis brand="Tesla Model x" color="preto" km={300} newCar={false} /> 
      <CarDetalis brand="Tesla Model Y" color="Azul" km={200} newCar={false} />
      {/*Loop em Array de objt */}
      {cars.map((car)=>(
        <CarDetalis 
         brand={car.brand}
         color={car.color} 
         km={car.km} 
         newCar={car.newCar} />
      )
      )}
      {/* fragments */}
      <Fragment propFragment="Marshall Is Stronger "/>
    </div>
  );
}

export default App;
