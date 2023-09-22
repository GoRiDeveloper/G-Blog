import { FieldErrors } from "react-hook-form";

const formValidation = (errors: FieldErrors, errorKey: string) => {
    const error = errors[errorKey];
    return error ? <label className="error">{error?.message}</label> : "";
};

export const Input = ({ register, name, errors, label = "", type, inputProps, disabled = false, trigger }: InputProps) => {
    return (
        <div>
            <TextField
                required
                disabled={disabled}
                type={type}
                error={errors && !!errors[name]}
                id={name}
                label={label}
                variant="standard"
                { ...register(name) }
                { ...(inputProps && { inputProps }) }
                onChange={() => trigger && trigger()}
                fullWidth
            />
            {errors && formValidation(errors, name)}
        </div>
    );
};