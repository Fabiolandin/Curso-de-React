const Button = ({ children, variant = "primary" }) => {

    const getVariantClasses = () => {
        if(variant == 'primary'){
            return 'bg-[#00ADB5] text-white'
        }

        if(variant == 'secundary'){
            return 'bg-transparent text-[#818181]'
        }
    }

    return <button className={`font-semibold flex hover:opacity-70 transition rounded-md items-center gap-2 px-3 py-1 text-xs ${getVariantClasses()}`}>
        {children}
    </button>
}

export default Button 