import { useState, useEffect } from "react";
import CommentForm from "./CommentForm/CommentForm";
import Comment from "./Comment/Comment";
import axios from "axios";
import { useRouter } from "next/router";
// Comments 에서 Comment와 CommentForm를 사용
// 이 곳에서 api 사용

export default function Comments({ postId }) {
    const [commentData, setCommentData] = useState([]);
    const router = useRouter();
    useEffect(async () => {
        if (!router.isReady) return;
        const postId = await router.query.id;
        const response = await axios.get(`/api/posts/${postId}/comments`);
        const { data } = response;
        setCommentData(data);
    }, [router.isReady]);

    return (
        <>
            <CommentForm></CommentForm>
            <button
                onClick={() => {
                    console.log(commentData);
                }}
            >
                hello there
            </button>
        </>
    );
}
