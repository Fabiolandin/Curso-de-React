import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { ArrowLeftIcon, ChevronRigthIcon, LoaderIcon, TrashIcon } from "../assets/icons"
import { toast } from "sonner"

import Sidebar from "../components/Sidebar"
import Button from "../components/Button"
import Input from "../components/Input"
import TimeSelect from "../components/TimeSelect"
import { useForm } from "react-hook-form"

const TaskDetailsPage = () => {
    const { taskId } = useParams()
    const [task, setTask] = useState()
    const navigate = useNavigate()
    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
        reset,
    } = useForm()

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
            reset(data)
        }

        fetchTasks()
    }, [taskId, reset])

    const handleSaveClick = async (data) => {

        const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
            method: "PATCH",
            body: JSON.stringify({
                title: data.title.trim(),
                description: data.description.trim()
            }),
        })
        if (!response.ok) {
            toast.error("Ocorreu um erro ao salvar a tarefa.")
        }
        const newTask = await response.json()
        setTask(newTask)
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

    return (
        <div className="flex">
            <Sidebar />
            <div className="px-8 py-16 w-full space-y-6">
                {/* barra do topo */}
                <div className="flex w-full justify-between">
                    {/* parte da esquerda */}
                    <div>
                        <button onClick={handleBackClick} className="h-8 w-8 rounded-full bg-brand-primary flex justify-center items-center mb-3">
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
                <form onSubmit={handleSubmit(handleSaveClick)}>
                    {/*dados das tarefas*/}
                    <div className="bg-brand-white p-6 rounde-x1 space-y-6">
                        <div>
                            <Input
                                id="title"
                                label="Titulo"
                                {...register('title', {
                                    required: 'O título é obrigatório.',
                                    validate: (value) => {
                                        if (!value.trim()) {
                                            return "O Titulo não pode ser vazio."
                                        }
                                        return true
                                    },
                                })}
                                error={errors?.title}
                            />
                        </div>
                        <div>
                            <TimeSelect
                            />
                        </div>
                        <div>
                            <Input
                                id="description"
                                label="Descrição"
                                {...register('description', {
                                    required: "A descrição é obrigatória.",
                                    validate: (value) => {
                                        if (!value.trim()) {
                                            return "A Descrição não pode ser vazia."
                                        }
                                        return true
                                    },
                                })}
                                error={errors?.description}
                            />
                        </div>

                    </div>
                    {/*Botões de Cancelar e Salvar*/}
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
                            disabled={isSubmitting}
                            type="submit"
                        >
                            {isSubmitting && <LoaderIcon className="animate-spin" />}
                            Salvar
                        </Button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default TaskDetailsPage