import { forwardRef } from "react"
import InputLabel from "./InputLabel"

const TimeSelect = forwardRef((props, ref) => {
    return (
        <div className="flex flex-col gap-1 text-left">
            <InputLabel htmlFor="time">Horário</InputLabel>
            <select
                id="time"
                className="px-4 py-3 border-solid border border-[#ECECEC] rounded-lg placeholder:text-sm outline-brand-primary"
                {...props}
                ref={ref}
            >

                <option value="morning">Manhã</option>
                <option value="afternoon">Tarde</option>
                <option value="evening">Noite</option>
            </select>
        </div>
    )
})

TimeSelect.displayName = "TimeSelect"
export default TimeSelect