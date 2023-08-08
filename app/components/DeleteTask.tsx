import { useRouter } from "next/navigation";
import { deleteTask } from "../../api";
import { ITask } from "../../types/task";
import { TaskService } from "../Services/TaskService";

interface deleteTaskProps {
    task: ITask,
    setOnModalDelete: (state: boolean) => boolean | void 
}

export const DeleteTask: React.FC<deleteTaskProps> = ({ task, setOnModalDelete }) => {

    const router = useRouter();

    const handleDeleteTask = async (id: string) => {

        try{
            await TaskService.deleteTask(id);
        }catch(error){
            console.log(error);
        }

        setOnModalDelete(false);
        router.refresh();
    };

    return (
        <>
            <h3 className="text-lg">Are you sure, do you want to delete this task?</h3>
            <div className="modal-action">
                <button className="btn-success" onClick={() => handleDeleteTask(task.id)}>Yes</button>
                <button className="btn-success" onClick={() => setOnModalDelete(false)}>No</button>
            </div>
        </>
    );
};