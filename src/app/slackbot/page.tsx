"use client"
import React from 'react'
import {sendMessage} from '@/actions/slacksdk'

const page = () => {
  const handleSendMessage = async () => {
    try {
      const response = await fetch('/api/slack', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'Suggest me some offroad cars' }),
      });

      if (response.ok) {
        console.log('Message sent successfully');
      } else {
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }
  return (
    <div className='pt-5'>
        <h1 className='text-center text-4xl font-extrabold text-white my-4'>SLACK BOT</h1>
        <div className='flex justify-center items-center'>
          <button onClick={() => handleSendMessage()} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Send Message</button>
        </div>
        
    </div>
  )
}

export default page;