import './App.css';
import CondicionalRandom from './CondicionalRandom';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
 {/*Imagens em assets*/}
//import League from './assets/league-of-legends-k-da-seraphine-all-out-splash-arts-wallpaper-5120x2160_16.jpg';


function App() {
  return (
    <div className="App">

      <h1>Avançando em React</h1>

      <p>Estou muito animado com o que estamos avançando em react nesse modulo! Aprendemos alguns conceitos basicos com criação do projeto, 
        eventos, componentes, jsx e hierarquia.</p>
      <p>Esses são fundamentais para desenvolver aplicações web dinâmicas e interativas.</p>
      <p> Agora podemos criar interfaces mais complexas e reutilizáveis com react. Vamos continuar praticando e explorando as possibilidades desse framework incrível!</p>
     {/*Imagens em public*/}
     <div>
        <img src="/IMG_0281.PNG" alt="" />
     </div>
      {/*Imagens em public*/}
      {/*Imagens em assets*/}
      {/*<img src={League} alt="" />*/}
    
    <ManageData/>
    <ListRender/>
    <CondicionalRandom/>
    </div>
  );
}

export default App;
