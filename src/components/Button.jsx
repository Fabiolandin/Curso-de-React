import { tv } from "tailwind-variants"
import PropTypes from "prop-types"

const Button = ({ children, color="primary", size="small", className, ...rest }) => {

    const button = tv({
        base: 'flex items-center justify-center gap-2 rounded-md px-3 font-semibold transition hover:opacity-75',
        variants: {
            color: {
                primary:"bg-brand-primary text-white",
                secundary:"bg-transparent text-brand-dark-gray",
                cancell:"bg-brand-light-gray text-brand-dark-blue"
            },
            size: {
                small:"py-1 text-xs",
                large:"py-2 text-sm",
            },
        },
        deafultVariants: {
            color:"primary",
            size:"small",
        }
    })

    return <button className={button({color, size, className})} {...rest}>
        {children}
    </button>
}

Button.PropTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(["primary", "secundary", "cancell"]),
    size: PropTypes.oneOf(['small', 'large']),
    className: PropTypes.string,
}

export default Button 