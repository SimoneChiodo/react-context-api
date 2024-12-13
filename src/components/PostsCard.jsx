export default function PostsCard({ post }) {
    return (
        <div className="card">
            <img src={post.image} className="card-img-top" alt="post-image" />

            <div className="card-body">
                <h4 className="card-title m-0">Titolo: </h4>
                <p className="card-text mb-1">{post.title}</p>

                <h5 className="card-title m-0">Autore: </h5>
                <p className="card-text mb-3">{post.author}</p>

                <h5 className="card-title m-0">Descrizione: </h5>
                <p className="card-text mb-3">{post.description}</p>

                <h5 className="card-title m-0">Genere: </h5>
                <p className="card-text mb-1">{post.genre}</p>

                <h5 className="card-title m-0">Tags: </h5>
                <p className="card-text mb-2">
                    {Array.isArray(post.tags)
                        ? post.tags.join(", ")
                        : post.tags}
                </p>

                <h5 className="card-title m-0">Stato: </h5>
                <p className="card-text mb-1">{post.status}</p>

                <h5 className="card-title m-0">Pubblicato: </h5>
                <p className="card-text mb-2">
                    {post.published ? "Sì ✅" : "No ❌"}
                </p>
            </div>
        </div>
    );
}
