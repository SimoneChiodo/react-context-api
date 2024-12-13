import { useState } from "react";

// Contexts
import { PostsContextProvider } from "./contexts/PostsContext";

// Components
import PostsPage from "./PostsPage";

//Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Custom CSS
import "./assets/App.css";

// Bootstrap JS
import * as bootstrap from "bootstrap";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <PostsContextProvider>
                <PostsPage />
            </PostsContextProvider>
        </>
    );
}

export default App;
