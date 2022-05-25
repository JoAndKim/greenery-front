import { Button } from "./StyledButton.style";

export default function StyledButton({ handleClick, className, children }) {
    return (
        <Button className={className} onClick={handleClick}>
            {children}
        </Button>
    );
}
