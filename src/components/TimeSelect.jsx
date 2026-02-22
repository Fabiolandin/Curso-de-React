import InputLabel from "./InputLabel"

const TimeSelect = (props) => {
    return (
        <div className="flex flex-col gap-1 text-left">
            <InputLabel htmlFor="time">Horário</InputLabel>
            <select
                id="time"
                className="px-4 py-3 border-solid border border-[#ECECEC] rounded-lg placeholder:text-sm outline-[#00ADB5]"
                {...props}
            >

                <option value="morning">Manhã</option>
                <option value="afternoon">Tarde</option>
                <option value="evening">Noite</option>
            </select>
        </div>
    )
}

export default TimeSelect