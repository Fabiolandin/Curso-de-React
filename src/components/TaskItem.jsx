import {CheckIcon, LoaderIcon, DetailsIcon, TrashIcon} from '../assets/icons'
import Button from '../components/Button'

const TaskItem = ({ task, handleCheckboxClick, handleDeleteClick }) => {

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
                        className="absolute h-full w-full cursor-pointer opacity-0" onChange={() => handleCheckboxClick(task.id)} />
                    {task.status == 'done' && <CheckIcon className="h-4 w-4" />}
                    {task.status == 'in_progress' && (<LoaderIcon className=" h-4 w-4 animate-spin" />)}
                </label>

                {task.title}
            </div>

            <div className='flex items-center gap-2'>
                <Button variant='secundary' onClick={() => handleDeleteClick(task.id)}>
                    <TrashIcon className="text-[#9A9C9F]"/>
                </Button>
                <a href='#' className='hover:opacity-75 transition'>
                    <DetailsIcon />
                </a>
            </div>
        </div>
    )
}

export default TaskItem