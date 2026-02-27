import { tv } from "tailwind-variants"
import PropTypes from "prop-types"
const SidebarButton = ({ children, color }) =>{
    
    const sidebarbutton = tv({
        base:"flex items-center gap-2 rounded-lg px-6 py-3",
        variants: {
            color: {
                unselected: 'text-brand-dark-blue',
                selected: 'bg-[#E6F7F8] text-brand-primary',
                buylist: 'text-[#808080]'
            }
        },
        defaultVariants: {
            color:"unselected"
        }
    })


    return(
        <a href="#" className={sidebarbutton({color})}>
            {children}
        </a>
    )
}

SidebarButton.PropTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(["selected", "unselected"])
}

export default SidebarButton