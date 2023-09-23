"use client";
import { useDispatch } from "react-redux";
import { useFetchAndLoad } from "@/hooks/";
import { Button } from "@/components/button";
import { login } from "@/services/public.services";
import { createUserAdapter } from "@/adapters";
import { createUser } from "@/redux/states/user.state";

export default function Login() {
    const { loading, callEndpoint } = useFetchAndLoad();
    const dispatch = useDispatch();
    const handleClick = async (data: any) => {
        const user = await callEndpoint(login(data));
        const newUser = createUserAdapter(user);
        dispatch(createUser(newUser));
    };

    return (
        <section>
            <h1>Inicio de Sesión</h1>
            <Button onClick={handleClick}> Iniciar Sesión </Button>
        </section>
    );
};