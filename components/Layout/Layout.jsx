import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { loginState, userInfoState } from "../../state";

export default function Layout({ children }) {
    const setLoginState = useSetRecoilState(loginState);
    const setUserInfoState = useSetRecoilState(userInfoState);
    const onReload = () => {
        const userInfo = localStorage.getItem("userInfo");
        if (userInfo) {
            setLoginState(true);
            setUserInfoState(JSON.parse(userInfo));
        }
    };

    useEffect(() => {
        onReload();
    }, []);

    return <>{children}</>;
}
