import Link from "next/link";
import { Container, Nav, Detail, Button, NavCard } from "./ImgCard.style";

export default function ImgNav() {
    return (
        <Container>
            <Nav>
                <NavCard imgUrl="/img/plant.png">
                    <Detail>당신에게 어울리는</Detail>
                    <Detail>반려 식물</Detail>
                    <Link href="/recommendation">
                        <a>
                            <Button>식물 추천</Button>
                        </a>
                    </Link>
                </NavCard>
                <NavCard imgUrl="/img/community.png">
                    <Detail>반려 식물과</Detail>
                    <Detail>오랫동안 함께하기</Detail>
                    <Link href="/community">
                        <a>
                            <Button>커뮤니티</Button>
                        </a>
                    </Link>
                </NavCard>
            </Nav>
        </Container>
    );
}
