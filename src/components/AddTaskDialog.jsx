import { createPortal } from "react-dom"
import { CSSTransition } from "react-transition-group"
import { useRef } from "react"
import { v4 } from 'uuid'
import Input from "./Input"
import Button from "./Button"
import "./AddTaskDialog.css"
import TimeSelect from "./TimeSelect"
import { LoaderIcon } from "../assets/icons"
import { useForm } from "react-hook-form"

const AddTaskDialog = ({
    isOpen,
    handleClose,
    onSubmitSuccess,
    onSubmitError,
}) => {


    const { register, formState: { errors, isSubmitting }, handleSubmit, reset } = useForm({
        defaultValues: {
            title: "",
            time: "morning",
            description: "",
        },
    })

    const nodeRef = useRef()


    const handleSaveClick = async (data) => {
        const task = { id: v4(), title: data.title.trim(), time: data.time, description: data.description.trim(), status: "not_started" }
        const response = await fetch("http://localhost:3000/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task),
        })
        if (!response.ok) {
            return onSubmitError()
        }
        handleClose()

        onSubmitSuccess(task)
        reset({
            title: "",
            time: "morning",
            description: "",
        })
    }

    return (
        <CSSTransition in={isOpen} timeout={500} classNames={"add-task-dialog"}
            nodeRef={nodeRef}
            unmountOnExit>
            <div>
                {createPortal(
                    <div ref={nodeRef} className="fixed bottom-0 backdrop-blur-sm top-0 flex h-screen w-screen left-0 items-center justify-center">
                        <div className="p-5 rounded-xl text-center bg-white shadow">
                            <h2 className="text-[#35383] font-semibold text-xl">Nova Tarefa</h2>
                            <p className="text-sm mt-1 mb-4 text-brand-text-gray">Insira as informações abaixo</p>

                            <form onSubmit={handleSubmit(handleSaveClick)} className="flex flex-col space-y-4 gap-3 w-[336px]">
                                <Input
                                    id="title"
                                    label="Titulo"
                                    placeholder="Insira o titulo da tarefa"
                                    disable={isSubmitting}
                                    {...register('title', {
                                        required: "O titulo é obrigatório.",
                                        validate: (value) => {
                                            if (!value.trim()) {
                                                return "O titulo não pode ser vazio."
                                            }
                                            return true
                                        },
                                    })}
                                    error={errors?.title}
                                />

                                <TimeSelect

                                />

                                <Input
                                    id="description"
                                    label="Descrição"
                                    placeholder="Descrição"
                                    disable={isSubmitting}
                                    {...register('description', {
                                        required: "A descrição é obrigatória.",
                                        validate: (value) => {
                                            if (!value.trim()) {
                                                return "A descrição não pode ser vazia."
                                            }
                                            return true
                                        },
                                    })}
                                    error={errors?.description}
                                />

                                <div className="flex">
                                    <Button
                                        size='large'
                                        className="w-full"
                                        color="cancell"
                                        onClick={handleClose}
                                        type="button"
                                    >
                                        Cancelar
                                    </Button>
                                    <Button
                                        size='large'
                                        className="w-full"
                                        type="submit"
                                    >
                                        {isSubmitting && <LoaderIcon className="animate-spin mr-2" />}
                                        Salvar
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>,
                    document.body

                )}
            </div>
        </CSSTransition>
    )

}



export default AddTaskDialog