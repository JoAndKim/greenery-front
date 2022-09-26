export interface IArticle {
    id: number;
    title: string;
    likes: number;
    likeStatus?: null | boolean;
    postContents: { id: number; postImageUrl: string; content: string }[];
    regDate: string;
    user: {
        userId: number;
        nickname: string;
        profileImageUrl: string;
    };
}
// {"id":14,"title":"버막바 커팅 기록","likes":0,"likeStatus":false,"postContents":[{"id":17,"postImageUrl":"https://joandkim-greenery.s3.ap-northeast-2.amazonaws.com/static/8d93c217-0d8f-4814-83f4-a010fce62a0aKakaoTalk_Photo_2022-09-06-03-31-37%20001.jpeg","content":"지난번 버막바 커팅 후 순화성공으로 자신감이 생겨 이제 과감히 시도!"}],"regDate":"2022-09-05 18:36:08","user":{"userId":11,"nickname":"plant_maniac","profileImageUrl":"https://joandkim-greenery.s3.ap-northeast-2.amazonaws.com/static/f6380be8-cc46-4e94-ba8e-1cf201a11309elice.png"}}
// "user":{"userId":11,"nickname":"plant_maniac","profileImageUrl":"https://joandkim-greenery.s3.ap-northeast-2.amazonaws.com/static/f6380be8-cc46-4e94-ba8e-1cf201a11309elice.png"}
