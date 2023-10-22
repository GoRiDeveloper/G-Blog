import type { GenericInputFile } from "@/models";

/**
 * Component of a generic file type input.
 * 
 * @param { GenericInputFile } param0 - Props a generic input file.
 * 
 * @returns { JSX.Element } Component of a generic file type input.
 */
// Componente de un input de tipo file génerico.
export const InputFile = ({
    name,
    multiple,
    accept,
    handleFile
}: GenericInputFile): JSX.Element => {
    return (
        <label className="flex justify-center mb-9">
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
                name={name}
                onChange={handleFile}
                multiple={multiple || false}
                accept={accept}
            />
        </label>
    );
};