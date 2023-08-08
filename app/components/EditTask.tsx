import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import { editTask } from "../../api";
import { ITask } from "../../types/task";

interface EditTaskProps {
    task: ITask,
    setOnModalEdit: (state: boolean) => boolean | void
}

export const EditTask: React.FC<EditTaskProps> = ({ task, setOnModalEdit }) => {

    const [taskToEdit, setTaskToEdit] = useState<string>(task.text);
    const router = useRouter();

    const handleSubmitEdit: FormEventHandler<HTMLFormElement> = async (f) => {

        f.preventDefault();

        try{

            await editTask({
                id: task.id,
                text: taskToEdit
            });

        }catch(error){
            console.log(error);
        }

        setOnModalEdit(false);
        router.refresh();

    }

    return (
        <>
            <form onSubmit={handleSubmitEdit}>
                <h3 className="title">Add new task</h3>
                <div>
                    <div>
                        <label className="label">Task</label>
                        <textarea value={taskToEdit} onChange={t => setTaskToEdit(t.target.value)}
                            placeholder="Task description"
                            className="input-text w-full">
                        </textarea>
                    </div>
                    <div className="mt-8">
                        <button type="submit" className="btn-success">Save</button>
                    </div>
                </div>
            </form>
        </>
    );
};