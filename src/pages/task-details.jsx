import { useEffect, useState, useRef } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import { ArrowLeftIcon, ChevronRigthIcon, TrashIcon } from "../assets/icons"
import Button from "../components/Button"
import Input from "../components/Input"
import TimeSelect from "../components/TimeSelect"

const TaskDetailsPage = () => {
    const { taskId } = useParams()
    const [task, setTask] = useState()
    const navigate = useNavigate()

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
                    <Button className="h-fit self-end" color="danger">
                        <TrashIcon />
                        Deletar a tarefa
                    </Button>
                </div>
                {/*dados das tarefas*/}
                <div className="bg-brand-white p-6 rounde-x1 space-y-6">
                    <div>
                        <Input id="title" label="Titulo" defaultValue={task?.title} />
                    </div>
                    <div>
                        <TimeSelect defaultValue={task?.time}/>
                    </div>
                    <div>
                        <Input id="description" label="Descrição" defaultValue={task?.description} />
                    </div>

                </div>
                <div className="w-full flex justify-end gap-3">
                    <Button size="large" color="secundary">Cancelar</Button>
                    <Button size="large" color="primary">Salvar</Button>

                </div>
            </div>
        </div>
    )
}

export default TaskDetailsPage