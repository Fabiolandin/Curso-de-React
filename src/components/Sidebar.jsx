import SidebarButton from "./SidebarButton"
import {HomeIcon, TasksIcon, BuyIcon} from '../assets/icons'

const Sidebar = () => {
    return (
        <div className="h-screen bg-white w-64">
            <div className="px-8 py-6 space-y-4">
                <h1 className="text-brand-primary text-xl font-semibold"> Task Manager</h1>
                <p>
                    Um simples {" "}
                    <span className="text-brand-primary">organizador de tarefas</span>.
                </p>

            </div>
            <div className="flex flex-col p-2 gap-2">
                <SidebarButton color="unselectd">
                    <HomeIcon />
                    Início
                </SidebarButton>
                <SidebarButton color="selected">
                    <TasksIcon />
                    Minhas Tarefas
                </SidebarButton>
                <SidebarButton color="buylist">
                    <BuyIcon />
                    Lista de Compras
                </SidebarButton>
            </div>
        </div>
    )
}

export default Sidebar