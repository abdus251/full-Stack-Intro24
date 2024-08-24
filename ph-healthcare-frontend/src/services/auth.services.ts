import { authkey } from "@/contants/authkey";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, removeFromLocalStorage, setToLocalStorage } from "@/utils/local-storage"

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
    // console.log(accessToken);
return setToLocalStorage(authkey, accessToken);
};



export const getUserInfo = () => {
    const authToken = getFromLocalStorage(authkey);
    // console.log(authToken)
    if(authToken){
        const decodedData: any = decodedToken(authToken);
        return {
            ...decodedData,
            role: decodedData?.role.toLowerCase(),
        };
    }
};
export const isLoggedIn = () => {
    const authToken = getFromLocalStorage(authkey);
    if (authToken) {
        return !!authToken;
    }
};

export const removeUser = () => {
    return removeFromLocalStorage(authkey);
}