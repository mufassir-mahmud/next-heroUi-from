import AddTasks from '@/components/AddTasks';
import TasksCard from '@/components/TasksCard';
import { createATask } from '@/lib/actions';
import { getTasks } from '@/lib/task';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const TasksPage = async() => {
    const tasks = await getTasks()
    return (
        <div>
            <h2 className='text-3xl my-6 text-center font-bold'>This is Tasks {tasks.length}</h2>
            <div className='flex justify-center mb-6'>
                <AddTasks createATask={createATask}></AddTasks>
                <Link href={'/tasks/new'}>
                <Button >Add New Task</Button>
                </Link>
            </div>
            <div className='grid grid-cols-3 gap-6 w-10/12 mx-auto'>
            
            {
                tasks.map(task => <TasksCard task={task} key={task.id}></TasksCard>)
            }
            </div>
        </div>
    );
};

export default TasksPage;