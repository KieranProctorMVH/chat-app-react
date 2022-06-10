import useTypedPage from '@/Hooks/useTypedPage';
import ChatMessage from '@/Interfaces/ChatMessage';
import React from 'react';

interface Props {
  message: ChatMessage;
  onClick: () => void;
}

const ChatCard: React.FC<Props> = ({ message, onClick }) => {
  const user = useTypedPage().props.user;

  return (
    <>
      {user.id === message.user_id ? (
        <li className="flex justify-end">
          <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow cursor-pointer" onClick={onClick}>
            <span className="block">{message.message}</span>
          </div>
        </li>
      ) : (
        <li className="flex justify-start">
          <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow cursor-pointer">
            <span className="block">{message.message}</span>
          </div>
        </li>
      )}
    </>
  );
};

export default ChatCard;
