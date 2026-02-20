import { createPortal } from "react-dom"

const AddTaskDialog = ({isOpen}) => {
    if(!isOpen) return null

    return createPortal(
        <div className="fixed bottom-0 backdrop-blur-sm top-0 flex h-screen w-screen left-0 items-center justify-center">
            <div className="p-5 rounded-xl text-center bg-white shadow">
                <h2 className="text-[#35383 font-semibold text-xl">Nova Tarefa</h2>
                <p className="text-sm mt-1 text-[#9A9C9F]">Insira as informações abaixo</p>
            </div>
        </div>,
        document.body

    )
}

export default AddTaskDialog