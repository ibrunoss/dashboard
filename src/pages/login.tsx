import Head from "next/head";
import { useState } from "react";

import Input from "../components/form/Input";

export default function Login() {
    const [mode, setMode] = useState<"signIn" | "signUp">("signIn");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    interface Actions {
        signIn: () => void;
        signUp: () => void;
    }

    const actions: Actions = {
        signIn() {
            console.log("entrar");
        },
        signUp() {
            console.log("cadastrar");
        },
    };

    const setSignIn = () => setMode("signIn");
    const setSignUp = () => setMode("signUp");

    function submit() {
        actions[mode]();
    }

    return (
        <>
            <Head>
                <title>
                    Login - {mode === "signIn" ? "Entrar" : "Cadastrar"}
                </title>
            </Head>
            <div className="min-h-screen flex items-center justify-center">
                <div className="hidden md:block md:w-1/2 lg:w-2/3">
                    <img
                        className="h-screen w-full object-cover"
                        src="https://source.unsplash.com/random"
                        alt="Imagem Aleatória"
                    />
                </div>
                <div className="m-10  w-full md:w-1/2 lg:w-1/3">
                    <h1 className="text-xl md:text-2xl lg:text-2xl font-bold mb-5">
                        {mode === "signIn"
                            ? "Entre com sua conta"
                            : "Cadastre-se na plataforma"}
                    </h1>
                    <Input
                        type="email"
                        label="Email"
                        value={email}
                        onChange={setEmail}
                        required
                    />
                    <Input
                        type="password"
                        label="Password"
                        value={password}
                        onChange={setPassword}
                        required
                    />
                    <button
                        className="w-full bg-indigo-500 hover:bg-indigo-400 rounded-lg text-white px-4 py-3 mt-6"
                        onClick={submit}
                    >
                        {mode === "signIn" ? "Entrar" : "Cadastrar"}
                    </button>

                    <hr className="my-6 border-gray-300 w-full" />

                    <button
                        className="w-full bg-red-500 hover:bg-red-400 rounded-lg text-white px-4 py-3"
                        onClick={submit}
                    >
                        {mode === "signIn" ? "Entrar" : "Cadastrar"} com Google
                    </button>
                    <p className="mt-8 text-center">
                        <a
                            onClick={mode === "signIn" ? setSignUp : setSignIn}
                            className="cursor-pointer"
                        >
                            {mode === "signIn"
                                ? "Novo por aqui?"
                                : "Já faz parte da nossa comunidade?"}{" "}
                            <span className="text-blue-500 hover:text-blue-700 font-semibold">
                                {mode === "signIn"
                                    ? "Crie uma conta gratuitamente"
                                    : "Entre com as suas credenciais"}
                            </span>
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}
