'use client';

import { useMutation } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Message, useChatContext } from '@/context/useChatContext';
import { cn } from '@/lib/utils';
import { uuidV4 } from '@/utils/uuid';

export const ChatForm = () => {
  const { toast } = useToast();

  const [input, setInput] = useState<string>('');
  const textareaRef = useRef<HTMLInputElement | null>(null);

  const { messages, addMessage, removeMessage, updateMessage, setIsMessageUpdating } =
    useChatContext();

  const { mutate: sendMessage } = useMutation({
    mutationKey: ['send-message'],
    mutationFn: async () => {
      const response = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages }),
      });

      if (!response.ok) {
        throw new Error();
      }

      return response.body;
    },
    onMutate(message: Message) {
      addMessage(message);
    },
    onSuccess: async (stream) => {
      if (!stream) throw new Error('No stream');

      const id = uuidV4();

      const responseMessage: Message = {
        id,
        isUserMessage: false,
        text: '',
      };

      addMessage(responseMessage);
      setIsMessageUpdating(true);

      const reader = stream.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);
        updateMessage(id, (prev) => prev + chunkValue);
      }

      setIsMessageUpdating(false);
      setInput('');

      setTimeout(() => {
        textareaRef.current?.focus();
      }, 10);
    },
    onError: (_, message) => {
      console.log('error');
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
      });
      removeMessage(message.id);
      textareaRef.current?.focus();
    },
  });

  return (
    <div className="flex flex-col justify-between gap-4 p-4 bg-white rounded-lg shadow-md dark:bg-stone-900 h-[22rem]">
      <div className="flex flex-col justify-start gap-4 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn('flex flex-1 items-end gap-2', {
              'self-end': message.isUserMessage,
              'self-start': !message.isUserMessage,
            })}
          >
            <div
              className={cn('p-3 rounded-lg', {
                'bg-green-900 text-white': message.isUserMessage,
                'bg-gray-200 dark:bg-stone-700': !message.isUserMessage,
              })}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <div className="flex-1">
          <input
            ref={textareaRef}
            className="w-full p-3 rounded-lg border border-gray-200 dark:border-stone-700 focus:outline-none focus:ring focus:ring-gray-300 dark:focus:ring-gray-600"
            placeholder="Type your message here..."
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();

                const message: Message = {
                  id: uuidV4(),
                  isUserMessage: true,
                  text: input,
                };

                sendMessage(message);
              }
            }}
          />
        </div>
        <Button>Send</Button>
      </div>
    </div>
  );
};
