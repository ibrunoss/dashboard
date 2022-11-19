import { createContext, useContext, useState } from "react";
import router from "next/router";
import {
    GoogleAuthProvider,
    User as FirebaseUser,
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import User from "../../model/User";
import auth from "../../firebase/config";
export interface IAuthContext {
    user?: User;
    signInWithGoogle: () => Promise<void>;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const userAdapter: (firebaseUser: FirebaseUser) => Promise<User> = async (
    firebaseUser
) => {
    const token = await firebaseUser.getIdToken();
    const {
        uid,
        email,
        displayName: name,
        photoURL: imageURL,
        providerData,
    } = firebaseUser;

    return {
        uid,
        email,
        name,
        imageURL,
        provider: providerData[0]?.providerId,
        token,
    };
};

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User>();

    const signInWithGoogle = async () => {
        signInWithPopup(auth, new GoogleAuthProvider())
            .then(async (result) => {
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = await userAdapter(result.user);
                if (user) {
                    setUser(user);
                    router.push("/");
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential =
                    GoogleAuthProvider.credentialFromError(error);
                console.log({ errorCode, errorMessage, email, credential });
                setUser(undefined);
            });
    };
    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {children}
        </AuthContext.Provider>
    );
};
