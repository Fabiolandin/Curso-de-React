import CheckIcon from '../assets/icons/check.svg?react'
import LoaderIcon from '../assets/icons/loader2.svg?react'
import DetailsIcon from '../assets/icons/details.svg?react'

const TaskItem = ({ task, handleTaskCheckboxClick }) => {

    const getStatusClasses = () => {
        if (task.status === "done") {
            return "bg-[#00ADB5] text-[#00ADB5]"
        }

        if (task.status === "in_progress") {
            return "bg-[#FFAA04] text-[#FFAA04]"
        }

        if (task.status === "not_started") {
            return "bg-[#FF0000] bg-opacity-10 text-[#FF0000]"
        }
    }

    return (
        <div
            className={` transition justify-between bg-opacity-10 flex items-center gap-2 rounded-lg px-4 py-3 text-sm ${getStatusClasses()}`}>
            <div className='flex items-center gap-2'>
                <label className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${getStatusClasses()}`}>
                    <input
                        type="checkbox"
                        checked={task.status === 'done'}
                        className="absolute h-full w-full cursor-pointer opacity-0" onChange={() => handleTaskCheckboxClick(task.id)} />
                    {task.status == 'done' && <CheckIcon className="h-4 w-4" />}
                    {task.status == 'in_progress' && (<LoaderIcon className=" h-4 w-4 animate-spin" />)}
                </label>

                {task.title}
            </div>
            <a href='#' className='hover:opacity-75 transition'>
            <DetailsIcon />
            </a>
        </div>
    )
}

export default TaskItem