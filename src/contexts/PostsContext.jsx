import { createContext, useContext } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

// Inizializzo l'array di post
// Index Function - Salva localmente nella variabile "posts"

fetch(`${apiUrl}/posts`)
    .then((res) => res.json())
    .then((data) => setPostsData(data));

// Creo il contesto
const PostsContext = createContext();

// Esporto il Provider
export const PostsContextProvider = ({ children }) => {
    // Creo l'array di post
    const postsData = {
        postsList: [
            {
                id: 1,
                title: "Ciambellone",
                author: "Giallos Zafferanos",
                status: "Bozza",
                image: "http://localhost:3000/images/ciambellone.jpeg",
                description: "Descrizione",
                genre: "Genere 1",
                tags: ["ciambella", "zucchero a velo", "dolce"],
                publish: false,
            },
            {
                id: 2,
                title: "Cracker di barbabietola",
                author: "Giallos Zafferanos",
                status: "Bozza",
                image: "http://localhost:3000/images/cracker_barbabietola.jpeg",
                description: "Descrizione",
                genre: "Genere 2",
                tags: ["cracker", "barbabietola"],
                publish: false,
            },
            {
                id: 3,
                title: "Pane fritto dolce",
                author: "Giallos Zafferanos",
                status: "Bozza",
                image: "http://localhost:3000/images/pane_fritto_dolce.jpeg",
                description: "Descrizione",
                genre: "Genere 3",
                tags: ["pane", "fritto", "dolce"],
                publish: false,
            },
            {
                id: 4,
                title: "Pasta di barbabietola",
                author: "Giallos Zafferanos",
                status: "Bozza",
                image: "http://localhost:3000/images/pasta_barbabietola.jpeg",
                description: "Descrizione",
                genre: "Genere 1",
                tags: ["pasta", "barbabietola"],
                publish: false,
            },
            {
                id: 5,
                title: "Torta paesana",
                author: "Giallos Zafferanos",
                status: "Bozza",
                image: "http://localhost:3000/images/torta_paesana.jpeg",
                description: "Descrizione",
                genre: "Genere 2",
                tags: ["torta", "dolce"],
                publish: false,
            },
        ],
    };

    return (
        <PostsContext.Provider value={postsData}>
            {children}
        </PostsContext.Provider>
    );
};

// Esporto lo "use" per i consumers
export const usePostsContext = () => useContext(PostsContext);
