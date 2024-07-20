import './App.css';
import Message from "./components/Message";

function App() {
    const name = "Evgen"

    console.log( <MyHeader name = {"Alex"} age={44}/>)
    return (
        <div className="App">
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div>Привет, {name}</div>
            <MyHeader name={"Alex"} age={23}/>
            <Message text={'Текст сообщения'}/>
            <h1 className="text-3xl font-bold underline ">
                Hello world!
            </h1>

        </div>
    );
}

export default App;

function MyHeader({name, age}) {
    return (
        <div>
            <div>Привет, {name}</div>
        </div>
    )

}

