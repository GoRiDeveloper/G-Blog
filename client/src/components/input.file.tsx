import { useAuthContext } from "@/hooks";

export const InputFile = () => {
    const { handleProfileImage } = useAuthContext();

    return (
        <label className="flex justify-center">
            <span className="sr-only">Choose profile photo</span>
            <input
                type="file" 
                className="
                    text-sm text-white
                    file:cursor-pointer
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-slate-700
                    hover:file:bg-violet-100
                "
                onChange={handleProfileImage}
                accept="image/*"
            />
        </label>
    );
};