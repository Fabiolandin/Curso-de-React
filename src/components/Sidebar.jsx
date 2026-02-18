import SidebarButton from "./SidebarButton"
import HomeIcon from '../assets/icons/home.svg?react'
import TasksIcon from "../assets/icons/tasks.svg?react"

const Sidebar = () => {
    return(
    <div className="h-screen bg-white w-64">
        <div className="px-8 py-6 space-y-4">
        <h1 className="text-[#00ADB5] text-xl font-semibold"> Task Manager</h1>
        <p>
            Um simples {" "}
        <span className="text-[#00ADB5]">organizador de tarefas</span>.
        </p>

        </div>
        <div className="flex flex-col p-2 gap-2">
            <SidebarButton variant="unselectd">
                <HomeIcon />
                Início
                </SidebarButton>
            <SidebarButton variant="selected">
                <TasksIcon />
                Minhas Tarefas
                </SidebarButton>
        </div>
    </div>
    )
}

export default Sidebar