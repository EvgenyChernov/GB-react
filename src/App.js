import './App.css';
import Message from "./components/Message";

function App() {
    const name = "Evgen"

    console.log( <MyHeader name = {"Alex"} age={44}/>)
    return (
        <div className="App">
            <div>Привет, {name}</div>
            <MyHeader name = {"Alex"} age={23}/>
            <Message text={'Текст сообщения'} />
        </div>
    );
}

export default App;

function MyHeader({name,age}) {
    return(
        <div>
            <div>Привет, {name}</div>
        </div>
    )

}

