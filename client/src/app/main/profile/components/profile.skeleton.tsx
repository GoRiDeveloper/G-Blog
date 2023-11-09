import type { FC } from "react";

/**
 * Skeleton component for the user profile.
 * 
 * @returns { JSX.Element } Skeleton component for the user profile.
 */
// Componente esqueleto para el perfil del usuario.
export const ProfileSkeleton: FC = (): JSX.Element => {
    return (
        <div className=" p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex flex-col items-center space-x-4">
                <div className="rounded-full bg-slate-400 h-40 w-40 mb-10"></div>
                <div className="w-full space-y-6 py-1">
                    <div className="h-3 bg-slate-400 rounded"></div>
                    <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-400 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-400 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-400 rounded"></div>
                    </div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-slate-400 rounded col-span-2"></div>
                            <div className="h-2 bg-slate-400 rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-slate-400 rounded"></div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-slate-400 rounded col-span-2"></div>
                            <div className="h-2 bg-slate-400 rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-slate-400 rounded"></div>
                    </div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-slate-400 rounded col-span-2"></div>
                            <div className="h-2 bg-slate-400 rounded col-span-1"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-slate-400 rounded col-span-2"></div>
                            <div className="h-2 bg-slate-400 rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-slate-400 rounded"></div>
                        <div className="h-2 bg-slate-400 rounded"></div>
                        <div className="h-2 bg-slate-400 rounded"></div>
                        <div className="h-2 bg-slate-400 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
