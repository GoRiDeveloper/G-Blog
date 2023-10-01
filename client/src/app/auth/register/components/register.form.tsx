"use client";

import Link from "next/link";
import {
    Input,
    InputFile,
    Button,
    UserIdSVG,
    MessageSVG,
    MailSVG,
    LockSVG
} from "@/components";
import { RegisterImage } from "../components";

export const RegisterForm = ({}) => {
    return (
        <form>
            <h1 className="text-4xl text-center">Registro</h1>
            <RegisterImage />
            <InputFile />
            <Input type="text" placeholder="Nombre :" required>
                <UserIdSVG className="w-6 h-6 fill-white absolute right-5 top-2/4 translate-y-[-50%]" />
            </Input>
            <Input type="text" placeholder="Descripción :" required>
                <MessageSVG className="w-6 h-6 fill-white absolute right-5 top-2/4 translate-y-[-50%]" />
            </Input>
            <Input type="email" placeholder="E-Mail :" required>
                <MailSVG className="w-6 h-6 fill-white absolute right-5 top-2/4 translate-y-[-50%]" />
            </Input>
            <Input type="password" placeholder="Contraseña :" required>
                <LockSVG className="w-6 h-6 fill-white absolute right-5 top-2/4 translate-y-[-50%]" />
            </Input >
            <Input type="password" placeholder="Confirmar contraseña :" required>
                <LockSVG className="w-6 h-6 fill-white absolute right-5 top-2/4 translate-y-[-50%]" />
            </Input >
            <Button className="w-full h-11 bg-white rounded-[2.5rem] text-slate-700 shadow-xl font-semibold" type="submit"> Registrate </Button>
            
        </form>
    );
};