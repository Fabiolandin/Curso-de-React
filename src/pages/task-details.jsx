import { useEffect, useState, useRef } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { ArrowLeftIcon, ChevronRigthIcon, LoaderIcon, TrashIcon } from "../assets/icons"
import { toast } from "sonner"

import Sidebar from "../components/Sidebar"
import Button from "../components/Button"
import Input from "../components/Input"
import TimeSelect from "../components/TimeSelect"

const TaskDetailsPage = () => {
    const { taskId } = useParams()
    const [task, setTask] = useState()
    const navigate = useNavigate()
    const [saveIsLoading, setSaveIsLoading] = useState(false)
    const [errors, setErrors] = useState([])

    const titleRef = useRef()
    const descriptionRef = useRef()
    const timeRef = useRef()

    const handleBackClick = () => {
        navigate(-1)
    }

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
                method: "GET"
            })
            const data = await response.json()
            setTask(data)
        }

        fetchTasks()
    }, [taskId])

    const handleSaveClick = async () => {
        setSaveIsLoading(true)
        const newErrors = []
        const title = titleRef.current.value
        const description = descriptionRef.current.value
        const time = timeRef.current.value

        if (!title.trim()) {
            newErrors.push({
                inputName: 'title',
                message: 'O título é obrigatório',
            })
        }

        if (!time.trim()) {
            newErrors.push({
                inputName: 'time',
                message: 'O horário é obrigatório',
            })
        }
        if (!description.trim()) {
            newErrors.push({
                inputName: 'description',
                message: 'A descrição é obrigatória',
            })
        }


        setErrors(newErrors)
        if (newErrors.length > 0) {
            return setSaveIsLoading(false)
        }

        const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
            method: "PATCH",
            body: JSON.stringify({
                title,
                description,
                time,
            }),
        })
        if (!response.ok) {
            toast.error("Ocorreu um erro ao salvar a tarefa.")
            return setSaveIsLoading(false)
        }
        const newTask = await response.json()
        setTask(newTask)
        setSaveIsLoading(false)
        toast.success("Tarefa salva com sucesso!")
    }

    const handleDeleteClick = async () => {
        const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
            method: "DELETE",
        })
        if (!response.ok) {
            return toast.error("Ocorreu um erro ao deletar a tarefa.")
        }
        toast.success("Tarefa deletada com sucesso!")
        navigate(-1)
    }

    const titleError = errors.find((error) => error.inputName == 'title')
    const descriptionError = errors.find((error) => error.inputName == 'description')

    return (
        <div className="flex">
            <Sidebar />
            <div className="px-8 py-16 w-full space-y-6">
                {/* barra do topo */}
                <div className="flex w-full justify-between">
                    {/* parte da esquerda */}
                    <div>
                        <button onClick={handleBackClick} className="h-8 w-8 rounded-full bg-brand-primary flex items-center mb-3">
                            <ArrowLeftIcon />
                        </button>

                        <div className="flex justify-between w-full text-xs">
                            <div>
                                <div className="flex items-center gap-1">
                                    <Link className="text-brand-text-gray cursor-pointer" to="/">Minhas tarefas</Link>
                                    <ChevronRigthIcon className="text-brand-text-gray" />
                                    <span className="font-semiboldtext-brand-primary">
                                        {task?.title}
                                    </span>
                                </div>
                                <h1 className="text-x1 font-semibold mt-2">{task?.title}</h1>
                            </div>
                        </div>
                    </div>
                    {/* parte da direita */}
                    <Button className="h-fit self-end" color="danger" onClick={handleDeleteClick}>
                        <TrashIcon />
                        Deletar a tarefa
                    </Button>
                </div>
                {/*dados das tarefas*/}
                <div className="bg-brand-white p-6 rounde-x1 space-y-6">
                    <div>
                        <Input
                            id="title"
                            label="Titulo"
                            defaultValue={task?.title}
                            error={titleError}
                            ref={titleRef}
                        />
                    </div>
                    <div>
                        <TimeSelect
                            defaultValue={task?.time}
                            ref={timeRef}
                        />
                    </div>
                    <div>
                        <Input
                            id="description"
                            label="Descrição"
                            defaultValue={task?.description}
                            error={descriptionError}
                            ref={descriptionRef}
                        />
                    </div>

                </div>
                <div className="w-full flex justify-end gap-3">
                    <Button
                        size="large"
                        color="secundary"
                        onClick={handleBackClick}
                    >
                        Cancelar
                    </Button>
                    <Button
                        size="large"
                        color="primary"
                        onClick={handleSaveClick}
                        disabled={saveIsLoading}
                    >
                        {saveIsLoading && <LoaderIcon className="animate-spin" />}
                        Salvar
                    </Button>

                </div>
            </div>
        </div>
    )
}

export default TaskDetailsPage