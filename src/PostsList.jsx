import { usePostsContext } from "./contexts/PostsContext";

// Components
import PostsCard from "./components/PostsCard";

export default function PostsList() {
    const postsData = usePostsContext();
    let count = 1;

    return (
        <>
            <div class="row row-cols-3 g-5">
                {postsData.map((post) => (
                    <div class="col">
                        <PostsCard key={post.id} post={post} />
                    </div>
                ))}
            </div>
        </>
    );
}
