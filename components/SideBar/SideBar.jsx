import React from "react";
import { SideBarWrapper, Icon, IconBox } from "./SideBar.style";

export default function SideBar(props) {
    return (
        <SideBarWrapper>
            <IconBox>
                <button onClick={props.likeHandler}>
                    <Icon width={20.62}>
                        <img
                            src={
                                props.isPostLiked
                                    ? "/icon/thumbs-up-solid.svg"
                                    : "/icon/thumbs-up.svg"
                            }
                            alt="thumbs-up"
                        />
                    </Icon>
                </button>

                <button onClick={props.commentHandler}>
                    <Icon width={22}>
                        <img src="/icon/comment.svg" alt="comment" />
                    </Icon>
                </button>

                <button onClick={props.updateHandler}>
                    <Icon width={22}>
                        <img src="/icon/edit.svg" alt="edit" />
                    </Icon>
                </button>

                <button onClick={props.trashHandler}>
                    <Icon width={19.25}>
                        <img src="/icon/trash.svg" alt="delete" />
                    </Icon>
                </button>
            </IconBox>
        </SideBarWrapper>
    );
}
