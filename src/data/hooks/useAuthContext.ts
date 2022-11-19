import { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";

const useAuthContext = () => {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error("useAuthContext must be in AuthContext");
    }

    return authContext;
};
export default useAuthContext;
