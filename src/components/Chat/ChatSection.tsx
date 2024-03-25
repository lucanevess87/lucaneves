'use client';

import Image from 'next/image';
import React from 'react';

import { ChatContextProvider } from '@/context/useChatContext';

import { ChatForm } from './ChatForm';

export const ChatSection = () => (
  <section id="chat" className="w-full py-12 md:py-24 lg:py-32">
    <div className="flex justify-between w-full items-center container">
      <div className="flex flex-col justify-center space-y-4 w-4/5">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-stone-800">
            AI Chat
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">AI Chat Section</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Engage with our AI chat for instant assistance and support.
          </p>
        </div>
        <ChatContextProvider>
          <ChatForm />
        </ChatContextProvider>
      </div>
      <Image alt="map" width={550} height={550} src="/map.svg" />
    </div>
  </section>
);
