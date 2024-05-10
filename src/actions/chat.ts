"use server"
import { db } from "@/lib/db";
import { getSuggestions } from "@/actions/ollama";

export const sendMessage = async (userId: string, message: string) => {
  try {
    const suggestions = await getSuggestions(message);
    
    if (suggestions !== 'Internal server error') {
        let userprompt = await db.message.create({
            data: {
                content: message,
                user: {
                connect: {
                    id: userId,
                },
                },
            },
        });
        
        let aimessage = await db.message.create({
            data: {
                content: suggestions,
                user: {
                connect: {
                    id: userId,
                },
                },
                isUser: false,
            },
        });

        console.log("updating messages");
    };

    return true;
  } catch (error) {
    console.error('Error handling message:', error);
    return false;
  }
};

export const getMessages = async (userId: string) => {
  try {
    const messages = await db.message.findMany({
      where: {
        userId: userId,
      },
    });
    return messages;
  } catch (error) {
    console.error('Error getting messages:', error);
    return [];
  }
}