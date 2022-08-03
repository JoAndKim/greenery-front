import { useState, useEffect } from "react";
import Comment from "./Comment/Comment";
import axios from "axios";
import { useRouter } from "next/router";
import { CommentsWrapper } from "./Comments.style";
import { CommentForm } from "..";

export default function Comments({ postId }) {
    const [commentData, setCommentData] = useState([]);
    const router = useRouter();

    useEffect(async () => {
        if (!router.isReady) return;
        const postId = await router.query.id;
        const response = await axios.get(`/api/posts/${postId}/comments`);
        const { data } = response;
        setCommentData(data.comments);
    }, [router.isReady]);

    return (
        <CommentsWrapper>
            <CommentForm
                postId={postId}
                layer={0}
                commentUpdateFunc={setCommentData}
            />
            {commentData &&
                commentData.map(
                    ({ content, groupId, id, layer, user, regDate }) => {
                        return (
                            <Comment
                                postId={postId}
                                layer={layer}
                                key={id}
                                content={content}
                                user={user}
                                groupId={groupId}
                                regDate={regDate}
                                commentUpdateFunc={setCommentData}
                            />
                        );
                    }
                )}
        </CommentsWrapper>
    );
}
