import "./App.css";
import Cursor from "./components/Cursor";
import ScrollBar from "./components/sidebar/ScrollBar";
import Main from "./pages/Main";

function App() {
    return (
        <>
            <Cursor />
            <ScrollBar />
            <Main />
        </>
    );
}

export default App;
