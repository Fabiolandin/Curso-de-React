import { createPortal } from "react-dom"
import { CSSTransition } from "react-transition-group"
import { useRef, useState } from "react"
import { v4 } from 'uuid'
import Input from "./Input"
import Button from "./Button"
import "./AddTaskDialog.css"
import TimeSelect from "./TimeSelect"

const AddTaskDialog = ({ isOpen, handleClose, handleSubmit }) => {
    const [errors, setErrors] = useState([])

    const nodeRef = useRef()
    const titleRef = useRef()
    const descriptionRef = useRef()
    const timeRef = useRef()


    const handleSaveClick = () => {
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
            return
        }

        handleSubmit({
            id: v4(),
            title,
            time,
            description,
            status: "not_started"
        })
        handleClose()
    }

    const titleError = errors.find((error) => error.inputName == 'title')
    const descriptionError = errors.find((error) => error.inputName == 'description')

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

                            <div className="flex flex-col space-y-4 gap-3 w-[336px]">
                                <Input
                                    id="title"
                                    label="Titulo"
                                    placeholder="Insira o titulo da tarefa" 
                                    errorMessage={titleError?.message}
                                    ref={titleRef}
                                    />

                                <TimeSelect 
                                ref={timeRef}
                                />
                            
                                <Input
                                    id="description"
                                    label="Descrição"
                                    placeholder="Descrição"
                                    error={descriptionError?.message}
                                    ref={descriptionRef}
                                    />

                                <div className="flex">
                                    <Button size='large' className="w-full" color="cancell" onClick={handleClose}>Cancelar</Button>
                                    <Button
                                        size='large'
                                        className="w-full"
                                        onClick={handleSaveClick}>
                                        Salvar
                                    </Button>

                                </div>
                            </div>
                        </div>
                    </div>,
                    document.body

                )}
            </div>
        </CSSTransition>
    )

}



export default AddTaskDialog