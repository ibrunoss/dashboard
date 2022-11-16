import { createContext, useContext, useState } from "react";
import {
    User as FirebaseUser,
    signInWithEmailAndPassword,
} from "firebase/auth";
import User from "../../model/User";

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
        providerId: provider,
    } = firebaseUser;

    console.log({ providerData });

    return {
        uid,
        email,
        name,
        imageURL,
        provider,
        token,
    };
};

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState();

    const signInWithGoogle = async () => {};
    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {children}
        </AuthContext.Provider>
    );
};
