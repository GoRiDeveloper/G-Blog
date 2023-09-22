import { useDispatch } from "react-redux";
import { Button } from "@/components/button";
import { login } from "@/services/public.services";
import { createUserAdapter } from "@/adapters";
import { createUser } from "@/redux/states/user.state";

const useFetchAndLoad = () => { return { loader: true, callEndpoint: (data: any) => data} };

export default function Login() {
    const dispatch = useDispatch();
    const { loader, callEndpoint } = useFetchAndLoad();
    const handleClick = async (data: any) => {
        const user = await callEndpoint(login(data));
        const newUser = createUserAdapter(user);
        dispatch(createUser(newUser));
    };

    return (
        <div>
            <h1>Inicio de Sesión</h1>
            <Button onClick={handleClick}> Iniciar Sesión </Button>
        </div>
    );
};