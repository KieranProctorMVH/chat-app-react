import useRoute from '@/Hooks/useRoute';
import Chat from '@/Interfaces/Chat';
import ChatMessage from '@/Interfaces/ChatMessage';
import { useForm } from '@inertiajs/inertia-react';
import React from 'react';
import ChatCard from './ChatCard';

interface Props {
  chat: Chat;
}

const ChatMessages: React.FC<Props> = ({ chat }) => {
  const form = useForm({
    _method: 'PUT',
    // deleted_at: ,
  });
  const route = useRoute();

  const deleteMessage = () => {
    console.log('Should delete!');
  };

  return (
    <ul className="space-y-2">
      {chat.messages.map((message: ChatMessage) => (
        <ChatCard key={message.id} message={message} onClick={deleteMessage} />
      ))}
    </ul>
  );
};

export default ChatMessages;
