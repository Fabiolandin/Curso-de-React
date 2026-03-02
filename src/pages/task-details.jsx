import { useEffect } from "react"
import { useParams } from "react-router-dom"

const TaskDetailsPage = () => {
    const { taskId } = useParams()

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch('http://localhost:3000/task/${taskId}', {
                method:"GET"
            })
            const data = await response.json()
            console.log({data})
        }

        fetchTasks()
    }, [])

    return <h1> Task Details Page</h1>
}

export default TaskDetailsPage