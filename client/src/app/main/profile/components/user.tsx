import { ImageChange } from "@/components";
import { UserProps } from "@/models";
import { SessionExpired } from "./";
import { getUserInfo } from "../lib";

/**
 * User profile component.
 * 
 * @param { UserProps } param0 - Props for the user profile component.
 * 
 * @returns { Promise<JSX.Element | never> } User profile component.
 */
// Componente del perfil de usuario.
export const User = async ({ token }: UserProps): Promise<JSX.Element | never> => {

    /**
     * Request to obtain the information of the user in session.
     */
    // Petición para obtener la información del usuario en sesión.
    const user = await getUserInfo(token);

    // Verificamos si hay información del usuario, si no, renderizamos
    // el componente de sesión expirada.
    if (!user) return <SessionExpired />;

    /**
     * Alt text for the user's image.
     */
    // Texto alternativo para la imagen del usuario.
    const imgDescription = `foto del usuario ${user.name}`;

    return (
        <section>
            <div className="relative overflow-hidden">
                <div className="relative z-10">
                    <ImageChange
                        imageState={user.profileImgUrl as string}
                        alt={imgDescription}
                    />
                </div>
                <div className="
                    absolute top-12 left-[-1rem] bg-[#18003c] h-[100px] w-[150%]
                    z-0 rotate-[-10deg] sm:hidden
                "></div>
            </div>
            <h2 className="text-4xl text-center text-white">{ user.name }</h2>
        </section>
    );

};
