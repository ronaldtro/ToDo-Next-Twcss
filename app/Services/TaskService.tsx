import { serverUrl } from "../../api";
import { ITask } from "../../types/task";

export const TaskService = {

    getAllTask: async (): Promise<ITask[]> => {

        try {

            let response = await fetch(`${serverUrl}/tasks`, {
                cache: 'no-store',
                headers: { 'Cache-Control': 'no-cache' }
            });
            
            return response.json();

        } catch (error) {
            console.log(error);
            throw error;
        }

    },
    addTask: async (task: ITask): Promise<ITask> => {

        try {

            const response = await fetch(`${serverUrl}/tasks`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            }).then(r => r.json());

            return response;

        } catch (error) {
            console.log(error);
            throw error;
        }


    },
    editTask: async (task: ITask): Promise<ITask> => {

        try {

            const response = await fetch(`${serverUrl}/tasks/${task.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            }).then(r => r.json());

            return response;

        } catch (error) {
            console.log(error);
            throw error;
        }

    },
    deleteTask: async (id: string): Promise<void> => {
        try {
            await fetch(`${serverUrl}/tasks/${id}`, { method: 'DELETE' });
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

};