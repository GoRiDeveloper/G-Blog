"use client";

import type { FC } from "react";
import { ImageChange, InputFile } from "@/components";
import { useAuthContext } from "../../hooks";

/**
 * Component to change the profile image of a form.
 * 
 * @returns { JSX.Element } Component to change the profile image of a form.
 */
// Componente para cambiar la imagen de perfil un formulario.
export const ProfileImgInput: FC = (): JSX.Element => {
    
    // Elementos del contexto de autenticación.
    const { profileImage, handleProfileImage } = useAuthContext();

    return (
        <>
            <ImageChange imageState={profileImage} alt="foto de perfil del iusuario" />
            <InputFile name="profileImgUrl" multiple={false} accept="image/*" handleFile={handleProfileImage} />
        </>
    );

};
