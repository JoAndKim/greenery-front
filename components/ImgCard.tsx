import Link from "next/link";
import css from "styled-jsx/css";

const style = css`
    .container {
        width: 1136px;
    }
    .nav {
        display: flex;
        justify-content: space-between;
    }
    .card {
        font-family: Roboto;
        box-sizing: border-box;
        width: 550px;
        height: 704px;
        padding: 60px 50px;
        border-radius: 10px;
    }
    .card-left {
        background: url("/img/plant.png");
    }
    .card-right {
        background: url("/img/community.png");
    }
    .detail {
        font-size: 48px;
        font-weight: bold;
        color: white;
        margin: 0;
    }
    .btn {
        outline: none;
        border: none;
        width: 134px;
        height: 46px;
        cursor: pointer;
        color: #45ba66;
        background: #efefef;
        border-radius: 5px;
        font-size: 18px;
        font-weight: bold;
        margin-top: 20px;
        transition: all 0.15s ease-in-out;
    }
    .btn:hover {
        background: #ffffff;
    }
`;

export default function ImgCard() {
    return (
        <>
            <div className="container">
                <div className="nav">
                    <div className="card card-left">
                        <p className="detail">당신에게 어울리는</p>
                        <p className="detail">반려 식물</p>
                        <Link href="/recommendation">
                            <a>
                                <button className="btn">식물 추천</button>
                            </a>
                        </Link>
                    </div>
                    <div className="card card-right">
                        <p className="detail">반려 식물과</p>
                        <p className="detail">오랫동안 함께하기</p>
                        <Link href="/community">
                            <a>
                                <button className="btn">커뮤니티</button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <style jsx>{style}</style>
        </>
    );
}
