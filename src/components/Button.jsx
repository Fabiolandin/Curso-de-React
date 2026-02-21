const Button = ({ children, variant = "primary", size = 'small', className, ...rest }) => {

    const getVariantClasses = () => {
        if (variant == 'primary') {
            return 'bg-[#00ADB5] text-white'
        }

        if (variant == 'secundary') {
            return 'bg-transparent text-[#818181]'
        }

        if (variant == 'cancell') {
            return 'bg-[#EEEEEE] text-[#35383E]'
        }
    }

    const getSizeClasses = () => {
        if (size == 'small') {
            return 'py-1 text-xs'
        }

        if(size == 'large'){
            return 'py-2 text-sn'
        }
    }

    return <button className={`font-semibold justify-center flex hover:opacity-70 transition rounded-md items-center gap-2 px-3 py-1 text-xs 
    ${getVariantClasses()} ${getSizeClasses()} ${className}`}
        {...rest}
    >
        {children}
    </button>
}

export default Button 