import { createPortal } from "react-dom"
import { CSSTransition } from "react-transition-group"
import { useRef } from "react"

import Input from "./Input"
import Button from "./Button"
import "./AddTaskDialog.css"
import TimeSelect from "./TimeSelect"

const AddTaskDialog = ({ isOpen, handleClose }) => {
    const nodeRef = useRef()

    return (
        <CSSTransition in={isOpen} timeout={500} classNames={"add-task-dialog"}
            nodeRef={nodeRef}
            unmountOnExit>
            <div>
                {createPortal(
                    <div ref={nodeRef} className="fixed bottom-0 backdrop-blur-sm top-0 flex h-screen w-screen left-0 items-center justify-center">
                        <div className="p-5 rounded-xl text-center bg-white shadow">
                            <h2 className="text-[#35383 font-semibold text-xl">Nova Tarefa</h2>
                            <p className="text-sm mt-1 mb-4 text-[#9A9C9F]">Insira as informações abaixo</p>
                            <div className="flex flex-col space-y-4 gap-3 w-[336px]">
                                <Input id="title" label="Titulo" placeholder="Insira o titulo da tarefa" />
                                <TimeSelect />
                                <Input id="description" label="Descrição" placeholder="Descrição" />
                                <div className="flex">
                                    <Button size='large' className="w-full" variant="cancell" onClick={handleClose}>Cancelar</Button>
                                    <Button size='large' className="w-full">Salvar</Button>

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