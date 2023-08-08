import { ITask } from "../../types/task";
import React from "react";
import { Task } from "./Task";

interface TodoListProps {
    tasks: ITask[]
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
    return (
        <div className="overflow-x-auto">
            <table className="border-black border-2 table w-full">

                <thead>
                    <tr>
                        <th className='color-success border-black border-r-2 border-b-2'>Id</th>
                        <th className='color-success border-black border-r-2 border-b-2'>Text</th>
                        <th className='color-success border-black border-r-2 border-b-2'>Option</th>
                    </tr>
                </thead>
                <tbody>
                    {
                     tasks.length != 0 ? tasks.map(t => (
                        <Task task={t} />
                     )) : <tr>
                            <td className="text-center">
                                <p>** No tasks available **</p>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TodoList;

