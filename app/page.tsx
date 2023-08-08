import Image from 'next/image';
import Link from 'next/link';
import { getAllTask } from '../api';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';
import { TaskService } from './Services/TaskService';

export default async function Home() {

  let tasks;

  try {
    tasks = await TaskService.getAllTask();
  } catch (error) {
    console.log(error);
  }

  //console.log(tasks);

  return (
    <main className="mx-auto max-w-4xl border-2 border-black mt-5">
      <div className="text-center my-5 p-4 flex flex-col gap-4">
        <h1 className="text-3xl font- font-bold">Todo list App</h1>
        <AddTask></AddTask>
        <TodoList tasks={tasks} />
   
        <Link href="miPerfil/6" >IR A MI PERFIL</Link>
      </div>
    </main>
  );
}
