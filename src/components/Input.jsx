import { forwardRef } from "react"
import InputLabel from "./InputLabel"

const Input = forwardRef(({ label, error, ...rest }, ref) => {
    return (
        <div className="flex flex-col space-y-1 text-left">
            <InputLabel htmlFor={rest.id}>{label}</InputLabel>
            <input
                className="px-4 py-3 border-solid border border-[#ECECEC] rounded-lg 
        placeholder:text-sm outline-brand-primary"
                ref={ref}
                {...rest}
            />
            {error && (
                <p className="text-left text-xs text-red-500">{error.message}</p>
            )}
        </div>
    )
})

Input.displayName = "Input"

export default Input