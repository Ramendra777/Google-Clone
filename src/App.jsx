import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import { AppContext } from "./utils/ContextApi";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Routes take props one is the path and other exact meaning he default route which is the first page. */}
                {/* element props used to tell which page is componenet is currently running. */}
                <Route path = "/" exact element = {<Home/>} />
                <Route path = "/" exact element = {<SearchResult/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
