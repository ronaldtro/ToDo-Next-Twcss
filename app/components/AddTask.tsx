"use client";

import { FormEventHandler, useState } from 'react';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { Modal } from './Modal';
import { ITask } from '../../types/task';
import { addTask } from '../../api';
import { useRouter } from 'next/navigation';
// Libreria cada Ids
import { v4 as uuidv4 } from 'uuid';
import { TaskService } from '../Services/TaskService';


interface AddTaskProps {

}

const AddTask: React.FC<AddTaskProps> = ({ }) => {

    const router = useRouter();
    const [onModal, setOnModal] = useState<boolean>(false);
    const [taskValue, setTaskValue] = useState<string>('');
    const [clearInputs, setClearInputs] = useState<string>('');

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {

        e.preventDefault();
        setClearInputs('');

        if (!taskValue) {

            setClearInputs('** Campos vacíos **');
            setTimeout(() => {
                setClearInputs('');
            }, 2500);

            return;
        }

        try{

            await TaskService.addTask({
                id: uuidv4(),
                text: taskValue
            });

        }catch(error){
            console.log(error);
        }

        setTaskValue("");
        setOnModal(false);
        //window.location.reload();
        router.refresh();

    }

    return (
        <div>
            <button onClick={() => setOnModal(true)}
                className='btn-success flex w-full items-center justify-center gap-1'>
                <AiOutlinePlus className='font-bold' size={20} />
                Add new task
            </button>
            <Modal onModal={onModal} setOnModal={setOnModal} >
                <form onSubmit={handleSubmit}>
                    <h3 className="title">Add new task</h3>
                    <div>
                        <div>
                            <label className="label">Task</label>
                            <textarea value={taskValue} onChange={t => setTaskValue(t.target.value)}
                                placeholder="Task description"
                                className="input-text w-full">
                            </textarea>
                        </div>
                        <p className='mt-2'>{clearInputs}</p>
                        <div className="mt-8">
                            <button type="submit" className="btn-success">Save</button>
                        </div>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AddTask;