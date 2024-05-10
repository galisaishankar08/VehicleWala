"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Loader } from "@/components";
import { sendMessage, getMessages } from "@/actions/chat";
import useStore from "@/store/zustandStore";

interface User {
    id: string;
    username: string;
    email: string;
    messages: Message[];
}

interface Message {
    id: string;
    content: string;
    timestamp: Date;
    user: User;
    userId: string;
    isUser: boolean;
}

const Chat = () => {
  const { user, messages,loading } = useStore();
  const [inputText, setInputText] = useState<string>("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const fetchedMessages = await getMessages(user.id);
        useStore.setState((state) => ({ ...state, messages: fetchedMessages as Message[] }));
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
  
    fetchMessages();
  }, [loading]);
  
  
  const handleSendMessage = () => {
    useStore.setState((state) => ({ ...state, loading: true }));
    if (inputText.trim() === "") return;

    const handleSendMessage = async () => { 
      const result = await sendMessage(user.id, inputText);
      console.log(result);
      useStore.setState((state) => ({ ...state, loading: false }));
    };

    handleSendMessage();
    console.log(messages);
    setInputText("");
  };
  
  return (
    <main className="relative">
    <h1 className="my-4 text-xl text-center font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-4xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Vehicle Recommendation</span> AI Chatbot</h1>
    <div className="h-60vh">
      <div className="h-60vh flex-grow overflow-y-auto px-3 text-base md:px-4 m-auto lg:px-1 xl:px-5 mx-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex mb-4 ${message.isUser ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`p-4 rounded-lg ${
                message.isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>
    </div>
    
    {
      loading && <Loader />
    }
      
    <div className="px-3 text-base md:px-4 mx-auto my-5 lg:px-1 xl:px-5">
      <div className="mx-auto flex flex-1 gap-3 text-base juice:gap-4 juice:md:gap-6 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]">
        <form action={handleSendMessage} className="w-full">
          <div className="relative flex h-full max-w-full flex-1 flex-col">
            <div className="absolute bottom-full left-0 right-0"></div>
            <div className="flex w-full items-center">
              <div className="overflow-hidden [&amp;:has(textarea:focus)]:border-token-border-xheavy [&amp;:has(textarea:focus)]:shadow-[0_2px_6px_rgba(0,0,0,.05)] flex flex-col w-full flex-grow relative border dark:text-white rounded-2xl bg-token-main-surface-primary border-token-border-medium">
                <textarea onChange={(e) => setInputText(e.target.value)} value={inputText} id="prompt-textarea" rows={1} placeholder="Type prompt..." className="m-0 w-full resize-none border-0 bg-transparent focus:ring-0 focus-visible:ring-0 dark:bg-transparent py-[10px] pr-10 md:py-3.5 md:pr-12 max-h-[25dvh] placeholder-black/50 dark:placeholder-white/50 pl-4 md:pl-6"></textarea>
                <button disabled={loading} onClick={handleSendMessage} className="absolute bottom-1.5 right-2 rounded-lg border border-black bg-white p-0.5 text-black transition-colors enabled:bg-white disabled:text-gray-400 disabled:opacity-10 dark:border-white dark:bg-white dark:hover:bg-white md:bottom-3 md:right-3">
                  <span className="" data-state="closed">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white dark:text-black"><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

  </main>
  )
}

export default Chat