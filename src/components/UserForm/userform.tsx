import React, { useRef } from 'react';
import { createUser } from "@/actions/useraction";
import useStore from "@/store/zustandStore";

interface User {
    username: string;
    email: string;
}

const UserForm = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = {
            email: formRef.current?.email.value,
            username: formRef.current?.username.value,
        };
        
        try {
            const user = await createUser(formData);
            if (user.email === formData.email) {
                useStore.setState((state) => ({ ...state, user: user as User }));
            }
            formRef.current?.reset();
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };
  return (
    <div className='backdrop-blur-sm bg-white/30 rounded-3xl h-fit w-fit p-5'>
        <form ref={formRef} onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john@gmail.com" required />
            </div>
            <div className="mb-5">
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
            </div>
            <div className='flex justify-center'>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
        </form>

    </div>
  )
}

export default UserForm