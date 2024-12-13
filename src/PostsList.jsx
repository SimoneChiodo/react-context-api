import { usePostsContext } from "./contexts/PostsContext";

export default function PostsList() {
    const { postsData } = usePostsContext();
    console.log(postsData);

    return (
        <>
            <ul>
                {postsData && postsData.map((post) => <li>{post.title}</li>)}
            </ul>
        </>
    );
}
