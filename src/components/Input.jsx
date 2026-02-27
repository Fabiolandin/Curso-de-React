import InputLabel from "./InputLabel"
import PropTypes from "prop-types"

const Input = ({ label, error, ...rest }) => {
    return(
    <div className="flex flex-col space-y-1 text-left">
        <InputLabel htmlFor={rest.id}>{label}</InputLabel>
        <input 
        className="px-4 py-3 border-solid border border-[#ECECEC] rounded-lg 
        placeholder:text-sm outline-brand-primary"
            {...rest}
        />
        {error && (
            <p className="text-left text-xs text-red-500">{error.message}</p>
        )}
    </div>
)
}

Input.PropTypes = {
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
}

export default Input