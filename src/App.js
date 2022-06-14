import { useContext } from "react";
import "./App.css";
import Cursor from "./components/Cursor";
import ScrollBar from "./components/sidebar/ScrollBar";
import { mouseEnter, mouseLeave } from "./context/cursorContext/cursorCalls";
import { CursorContext } from "./context/cursorContext/CursorContext";
import Main from "./pages/Main";

function App() {
    const { dispatch } = useContext(CursorContext);

    return (
        <>
            <Cursor />

            <ScrollBar />

            <Main />
        </>
    );
}

export default App;
