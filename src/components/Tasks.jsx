import Button from "./Button";
import {TrashIcon, AddIcon, SunIcon, CloudIcon, MoonIcon} from '../assets/icons'
import TaskSeparator from "./TasksSeparator";
import { useState } from "react";
import TASKS from '../constants/tasks'
import TaskItem from "./TaskItem";
import { toast } from "sonner"

const Tasks = () => {
    const [tasks, setTasks] = useState(TASKS)

    const morningTasks = tasks.filter((task) => task.time == "morning");
    const afternoonTasks = tasks.filter((task => task.time == "afternoon"));
    const moonTasks = tasks.filter((task => task.time == "moon"));

    const handleCheckboxClick = (taskId) => {
        const newTasks = tasks.map((task) => {
            if (task.id != taskId) {
                return task
            }

            if (task.status == 'not_started') {
                toast.success("Tarefa iniciada com sucesso!")
                return { ...task, status: 'in_progress' }
            }

            if (task.status == 'in_progress') {
                toast.success("Tarefa concluida com sucesso!")
                return { ...task, status: 'done' }
            }

            if (task.status == 'done') {
                return { ...task, status: 'not_started' }
            }

            return task
        })
        setTasks(newTasks)
    }

    const handleDeleteClick = (taskId) => {
        const newTasks = tasks.filter(task => task.id != taskId)
        setTasks(newTasks)
        toast.success("Tarefa removida com sucesso!")
    }

    return <div className="w-full py-16 px-8 space-y-6">
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
                {morningTasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        handleCheckboxClick={handleCheckboxClick}
                        handleDeleteClick={handleDeleteClick}
                    />
                ))}
            </div>

            <div className="space-y-3 my-6">
                <TaskSeparator title="Tarde" icon={<CloudIcon />} />
                {afternoonTasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        handleCheckboxClick={handleCheckboxClick}
                        handleDeleteClick={handleDeleteClick}
                    />
                ))}
            </div>

            <div className="space-y-3 my-6">
                <TaskSeparator title="Noite" icon={<MoonIcon />} />
                {moonTasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        handleCheckboxClick={handleCheckboxClick}
                        handleDeleteClick={handleDeleteClick}
                    />
                ))}
            </div>


        </div>
    </div>
}
export default Tasks;