    'use server'
import { revalidatePath } from "next/cache";
import { postTask } from "./task";
import { redirect } from "next/navigation";

// export const createATask = async(fromData) =>{
//     'use server'
//    const newTask = Object.fromEntries(fromData.entries());
//    console.log(newTask)
//    const res = await postTask(newTask);
//    if(res.ok){
//     revalidatePath("./task")
//    }
//    return res
// }

export const createATask = async(fromData) =>{

    const newTask = Object.fromEntries(fromData.entries())
    const res = await postTask(newTask);
    console.log('Added Task', newTask)
    if(res.ok){
        revalidatePath("./tasks")
        redirect("/tasks")
    }
    return res
}

