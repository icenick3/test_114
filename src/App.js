import './App.css';
import TopBlock from "./components/TopBlock/TopBlock";
import MiddleBlock from "./components/MidleBlock/MidleBlock";
import BotBlock from "./components/BotBlock/BotBlock";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <TopBlock/>
            <MiddleBlock/>
            <BotBlock/>
            <Footer/>
        </div>
    );
}

export default App;
