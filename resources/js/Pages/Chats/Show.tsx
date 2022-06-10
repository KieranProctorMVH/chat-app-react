import useRoute from '@/Hooks/useRoute';
import Chat from '@/Interfaces/Chat';
import ChatMessage from '@/Interfaces/ChatMessage';
import AppLayout from '@/Layouts/AppLayout';
import { useForm } from '@inertiajs/inertia-react';
import React, { useRef } from 'react';
import ChatMessages from './Partials/ChatMessages';

interface Props {
  chat: Chat[];
}

const ChatsShow: React.FC<Props> = ({ chat }) => {
  const form = useForm({
    _method: 'POST',
    message: '',
  });
  const route = useRoute();
  const messageRef = useRef<HTMLInputElement>(null);

  function sendMessage() {
    form.post(route('chats.messages.store', chat), {
      //   errorBag: 'updateProfileInformation',
      preserveScroll: true,
      onSuccess: () => {
        clearMessageInput();
      },
    });
  }

  function clearMessageInput() {
    if (messageRef.current?.value) {
      messageRef.current.value = '';
      form.setData('message', '');
    }
  }

  return (
    <AppLayout
      title={`Chat #${chat[0].id}`}
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Chat #{chat[0].id}
        </h2>
      )}
    >
      <div className="py-12">
        <div className="max-w-site mx-auto tablet:px-6 desktop:px-8">
          <div className="grid grid-cols-1 gap-4 items-start desktop:grid-cols-3 desktop:gap-8">
            {/* Friends */}
            <div className="grid grid-cols-1 gap-4">
              <section>
                <div className="rounded-lg bg-white overflow-hidden shadow">
                  <div className="p-6">
                    <div className="h-96 border-4 border-dashed border-gray-200 rounded-lg"></div>
                  </div>
                </div>
              </section>
            </div>

            {/* Chat */}
            <div className="grid grid-cols-1 gap-4 desktop:col-span-2">
              <section>
                <div className="rounded-lg bg-white overflow-hidden shadow">
                  <div className="p-6">
                    <div className="min-h-[24rem] border-4 border-dashed border-gray-200 rounded-lg">
                      <ChatMessages chat={chat[0]} />

                      <form
                        onSubmit={e => {
                          e.preventDefault();
                          sendMessage();
                        }}
                      >
                        <input
                          type="text"
                          name="message"
                          placeholder="Type message.."
                          ref={messageRef}
                          onChange={e =>
                            form.setData('message', e.currentTarget.value)
                          }
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow-xl tablet:rounded-lg"></div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ChatsShow;
