import { createContext, useContext, useEffect, useState } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

// Creo il contesto
const PostsContext = createContext();

// Esporto il Provider
export const PostsContextProvider = ({ children }) => {
    // Creo l'array di post
    const [postsData, setPostsData] = useState({
        posts: [],
    });

    useEffect(() => {
        Index();
    }, []);

    // Index Function (Inizializzo l'array di post)
    const Index = () =>
        fetch(`${apiUrl}/posts`)
            .then((res) => res.json())
            .then((data) => {
                setPostsData(data);
            });

    return (
        <PostsContext.Provider value={postsData}>
            {children}
        </PostsContext.Provider>
    );
};

// Esporto lo "use" per i consumers
export const usePostsContext = () => useContext(PostsContext);
