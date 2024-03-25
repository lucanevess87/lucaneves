'use client';

import { ReactNode, createContext, useContext, useState } from 'react';
import { z } from 'zod';

import { uuidV4 } from '@/utils/uuid';

export const MessageSchema = z.object({
  id: z.string(),
  text: z.string(),
  isUserMessage: z.boolean(),
});

export const MessageArraySchema = z.array(MessageSchema);

export type Message = z.infer<typeof MessageSchema>;

type ChatContextProviderProps = {
  children: ReactNode;
};

type ChatContextType = {
  messages: Message[];
  isMessageUpdating: boolean;
  addMessage: (message: Message) => void;
  removeMessage: (id: string) => void;
  updateMessage: (id: string, updateFn: (prevText: string) => string) => void;
  setIsMessageUpdating: (isUpdating: boolean) => void;
};

export const ChatContext = createContext<ChatContextType>({
  messages: [],
  isMessageUpdating: false,
  addMessage: () => {},
  removeMessage: () => {},
  updateMessage: () => {},
  setIsMessageUpdating: () => {},
});

const defaultValue = [
  {
    id: uuidV4(),
    text: 'Hello, how can I help you?',
    isUserMessage: false,
  },
  {
    id: uuidV4(),
    text: 'Hello, how can I help you?',
    isUserMessage: true,
  },
];

export const ChatContextProvider = ({ children }: ChatContextProviderProps) => {
  const [messages, setMessages] = useState(defaultValue);
  const [isMessageUpdating, setIsMessageUpdating] = useState<boolean>(false);

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  const removeMessage = (id: string) => {
    setMessages((prev) => prev.filter((message) => message.id !== id));
  };

  const updateMessage = (id: string, updateFn: (prevText: string) => string) => {
    setMessages((prev) =>
      prev.map((message) => {
        if (message.id === id) {
          return { ...message, text: updateFn(message.text) };
        }
        return message;
      }),
    );
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        isMessageUpdating,
        addMessage,
        removeMessage,
        updateMessage,
        setIsMessageUpdating,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => useContext(ChatContext);
