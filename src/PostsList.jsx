import { usePostsContext } from "./contexts/PostsContext";

export default function PostsList() {
    const postsData = usePostsContext();
    let count = 1;

    return (
        <>
            <table className="table table-bordered border-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Immagine</th>
                        <th scope="col">Titolo</th>
                        <th scope="col">Autore</th>
                        <th scope="col">Pubblicato</th>
                    </tr>
                </thead>

                <tbody>
                    {postsData.map((post) => (
                        <tr key={post.id}>
                            <th scope="row">{count++}</th>
                            <td>
                                <img
                                    src={post.image}
                                    alt={post.title + "-image"}
                                    width="200"
                                />
                            </td>
                            <td>{post.title}</td>
                            <td>{post.author}</td>
                            <td>{post.published ? "Sì" : "No"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
