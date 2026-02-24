import InputLabel from "./InputLabel"

const Input = ({ label, error, ...rest }) => {
    return(
    <div className="flex flex-col space-y-1 text-left">
        <InputLabel htmlFor={rest.id}>{label}</InputLabel>
        <input 
        className="px-4 py-3 border-solid border border-[#ECECEC] rounded-lg 
        placeholder:text-sm outline-[#00ADB5]"
            {...rest}
        />
        {error && (
            <p className="text-left text-xs text-red-500">{error.message}</p>
        )}
    </div>
)
}

export default Input