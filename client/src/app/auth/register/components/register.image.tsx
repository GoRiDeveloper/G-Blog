import { useAuthContext } from "../../hooks";

export const RegisterImage = (): JSX.Element => {
    const { profileImage } = useAuthContext();

    return (
        <figure className="shw-img w-[9rem] h-[9rem] my-[1.875rem] border border-white/[.2] overflow-hidden relative left-2/4 translate-x-[-50%] flex justify-center items-center rounded-[50%] before:bg-blue-400">
            <img className="w-full h-full object-cover object-center" src={profileImage} alt="foto de usuario" />
        </figure>
    );
};