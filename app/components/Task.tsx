"use client";

import React, { useState } from "react";
import { ITask } from "../../types/task";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Modal } from "./Modal";
import { EditTask } from "./EditTask";
import { DeleteTask } from "./DeleteTask";

interface taskProps {
    key: string,
    task: ITask
}

export function Task({ task, key }: taskProps) {

    const [onModalEdit, setOnModalEdit] = useState<boolean>(false);
    const [onModalDelete, setOnModalDelete] = useState<boolean>(false);

    return (
        <tr key={key} className="border-black border-2">
            <td className='border-r-2 border-black p-2'>{task.id}</td>
            <td className='border-r-2 border-black p-2'>{task.text}</td>
            <td className='border-r-2 border-black p-2'>
                <div className="flex justify-center gap-3">
                    <AiOutlineEdit onClick={() => setOnModalEdit(true)} cursor='pointer' className="font-bold" size={17} />
                    <Modal onModal={onModalEdit} setOnModal={setOnModalEdit} >
                        <EditTask task={task} setOnModalEdit={setOnModalEdit} />
                    </Modal>
                    <AiOutlineDelete onClick={() => setOnModalDelete(true)} className="font-bold cursor-pointer" size={17} />
                    <Modal onModal={onModalDelete} setOnModal={setOnModalDelete} >
                        <DeleteTask task={task} setOnModalDelete={setOnModalDelete} />
                    </Modal>
                </div>
            </td>
        </tr>
    );
}