import { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";

const useAuth = () => {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error("useAuthContext must be in AuthContext");
    }

    return authContext;
};
export default useAuth;
