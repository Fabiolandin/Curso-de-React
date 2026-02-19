import Button from "./Button";
import AddIcon from "../assets/icons/add.svg?react"
import TrashIcon from "../assets/icons/trash.svg?react"
import SunIcon from "../assets/icons/sun.svg?react"
import MoonIcon from "../assets/icons/moon.svg?react"
import CloudIcon from "../assets/icons/cloud-sun.svg?react"

const Tasks = () => {
    return <div className="w-full py-16 px-8">
        <div className="flex w-full justify-between">
            <div>
            <span className="text-xs font-semibold text-[#00ADB5]">Minhas Tarefas</span>
            <h2 className="text-xl font-semibold">Minhas Tarefas</h2>
            </div>


            <div className="flex items-center gap-3">
                <Button variant="secundary">
                    <TrashIcon />
                    Limpar tarefas
                </Button>
                <Button>
                    <AddIcon />
                    Nova Tarefa
                </Button>
            </div>
        </div>

        {/* Lista de Tarefas */}
        <div className="rounded-xl p-6 bg-white">

            {/* Manhã */}
            <div className="space-y-3">
            <div className="flex gap-2 pb-1 border-b border-solid border[#F4F4F5]">
                <SunIcon />
                <p className="text-[#9A9C9F] text-sm">Manhã</p>
            </div>
            </div>
            {/* Tarde */}
            <div className="space-y-3 my-6">
            <div className="flex gap-2 pb-1 border-b border-solid border[#F4F4F5]">
                <CloudIcon />
                <p className="text-[#9A9C9F] text-sm">Tarde</p>
            </div>
            </div>
            {/* Noite */}
            <div className="space-y-3">
            <div className="flex gap-2 pb-1 border-b border-solid border[#F4F4F5]">
                <MoonIcon />
                <p className="text-[#9A9C9F] text-sm">Noite</p>
            </div>
            </div>


        </div>
    </div>
}
export default Tasks;