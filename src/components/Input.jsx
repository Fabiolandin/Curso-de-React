const Input = ({ label, ...rest }) => {
    return(
    <div className="flex flex-col space-y-1 text-left">
        <label className="text-sm font-semibold text-[#35383E]" htmlFor={rest.id}>{label}</label>
        <input 
        className="px-4 py-3 border-solid border border-[#ECECEC] rounded-lg 
        placeholder:text-sm outline-[#00ADB5]"
            {...rest}
        />
    </div>
)
}

export default Input