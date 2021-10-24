import Head from "next/head";
import { useState } from "react";

import Input from "../components/form/Input";

export default function Login() {
  const [mode, setMode] = useState<"signIn" | "signUp">("signIn");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div>
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
      </div>
    </>
  );
}
