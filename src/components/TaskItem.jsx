import { useState } from 'react'
import { CheckIcon, LoaderIcon, DetailsIcon, TrashIcon } from '../assets/icons'
import Button from '../components/Button'
import { toast } from 'sonner'


const TaskItem = ({ task, handleCheckboxClick, onDeleteSuccess }) => {

    const [deleteIsLoading, setDeleteIsLoading] = useState(false)

    const handleDeleteClick = async () => {
        setDeleteIsLoading(true)
        //Chamando a API para deletar a tarefa
        const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
            method: 'DELETE',
        })
        if (!response.ok) {
            setDeleteIsLoading(false)
            return toast.error(
                "Erro ao deletar a tarefa. Por favor, tente novamente!"
            )
        }
        onDeleteSuccess()
        setDeleteIsLoading(false)
    }

    const getStatusClasses = () => {
        if (task.status === "done") {
            return "bg-brand-primary text-brand-primary"
        }

        if (task.status === "in_progress") {
            return "bg-brand-process text-brand-process"
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
                    {task.status == 'in_progress' && (<LoaderIcon className=" h-4 w-4 animate-spin text-brand-white" />)}
                </label>

                {task.title}
            </div>

            <div className='flex items-center gap-2'>
                <Button color='secundary' onClick={handleDeleteClick}>
                    {deleteIsLoading ? (
                        <LoaderIcon className=" h-4 w-4 animate-spin text-brand-gray" />
                    ) : (
                        <TrashIcon className="text-brand-text-gray" />
                    )}
                </Button>
                <a href='#' className='hover:opacity-75 transition'>
                    <DetailsIcon />
                </a>
            </div>
        </div>
    )
}

export default TaskItem