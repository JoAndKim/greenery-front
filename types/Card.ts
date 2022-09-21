export interface IPostCard {
    id: number;
    title: string;
    mainImageUrl: string;
    likes?: number;
    hits?: number;
    user: {
        memberId: number;
        nickname: string;
        profileImageUrl: string | null;
    };
}
