"use client";
import React from "react";
import { UserForm, Chat } from "@/components";
import useStore from "@/store/zustandStore";

const Home = () => {
  const { user } = useStore();
  return (
    <>
      { 
        user.username ==="" ? 
        <div className="flex justify-center items-center h-screen">
          <UserForm />
        </div>
        :
        <Chat />
       
      }
    </>
  );
}

export default Home
