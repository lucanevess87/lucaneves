import Image from 'next/image';
import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';

export const ContactSection = () => (
  <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="flex justify-between w-full items-center container">
      <div className="flex flex-col justify-center space-y-4 w-4/5">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
            AI Chat
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">AI Chat Section</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Engage with our AI chat for instant assistance and support.
          </p>
        </div>
        <div className="grid gap-4 p-4 bg-white rounded-lg shadow-md dark:bg-gray-900">
          <div className="flex items-center gap-2">
            <Avatar className="w-10 h-10 border">
              <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg">
                Hi there! How can I assist you today?
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <input
                className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring focus:ring-gray-300 dark:focus:ring-gray-600"
                placeholder="Type your message here..."
                type="text"
              />
            </div>
            <Button>Send</Button>
          </div>
        </div>
      </div>
      <Image alt="map" width={550} height={550} src="/map.svg" />
    </div>
  </section>
);
