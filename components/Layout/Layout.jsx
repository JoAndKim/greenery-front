import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { loginState } from "../../state";

export default function Layout({ children }) {
    const setLoginState = useSetRecoilState(loginState);
    const onReload = () => {
        const userInfo = localStorage.getItem("userInfo");
        console.log("set data on global state");
        if (userInfo) {
            setLoginState(true);
        }
    };

    useEffect(() => {
        onReload();
    }, []);

    return <>{children}</>;
}
