import Button from "./Button";
import AddIcon from "../assets/icons/add.svg?react"
import TrashIcon from "../assets/icons/trash.svg?react"
import SunIcon from "../assets/icons/sun.svg?react"
import MoonIcon from "../assets/icons/moon.svg?react"
import CloudIcon from "../assets/icons/cloud-sun.svg?react"
import TaskSeparator from "./TasksSeparator";

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

        <div className="rounded-xl p-6 bg-white">
            <div className="space-y-3 my-6">
                <TaskSeparator title="Manhã" icon={<SunIcon />} />
            </div>

            <div className="space-y-3 my-6">
                <TaskSeparator title="Tarde" icon={<CloudIcon />} />
            </div>

            <div className="space-y-3 my-6">
                <TaskSeparator title="Noite" icon={<MoonIcon />} />
            </div>


        </div>
    </div>
}
export default Tasks;