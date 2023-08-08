import { ITask } from "./types/task";

export const serverUrl = 'http://localhost:3001';

export const getAllTask = async (): Promise<ITask[]> => {

   // const response = await fetch(`${serverUrl}/tasks`, {
   //    cache: 'no-store', 
   //    headers: {
   //      'Cache-Control': 'no-cache', 
   //    },
   //  });

   // const responseJson = await response.json();

   // console.log(responseJson);

   // return responseJson;



   // Otra forma
   // const fetchData = async () => {
   //    try {
   //      const response = await fetch('URL_DEL_BACKEND');
   //      const jsonData = await response.json();
   //      jsonData;
   //    } catch (error) {

   //    }
   //  };


   let response;

   response = await fetch(`${serverUrl}/tasks`, {
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache' }
   }).then(response => response.json());

   return response;

}

export const addTask = async (task: ITask): Promise<ITask> => {

   const response = await fetch(`${serverUrl}/tasks`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
   }).then(r => r.json());


   return response;

};

export const editTask = async (task: ITask): Promise<ITask> => {

   const response = await fetch(`${serverUrl}/tasks/${task.id}`, {
      method: 'PUT',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
   }).then(r => r.json());

   return response;

}

export const deleteTask = async (id: string): Promise<void> => {

   await fetch(`${serverUrl}/tasks/${id}`, { method: 'DELETE' });

}