import Header from "./components/Header";
import './App.css';
import ItemListContainer from "./components/ItemListContainer";

function App() {


  return(
    <div>
      <Header />
      <ItemListContainer mensaje="Hola mundo!"/>
    </div>
  )
}

export default App