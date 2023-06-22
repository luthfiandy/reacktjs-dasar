import React from "react";
import { useLogin } from "../hooks/useLogin";

export const ProfilPage = () => {
    const username = useLogin();
    return (
        <div>
            ini adalah profil
            <h1>username={username}</h1>
        </div>
    );
};

export default ProfilPage;