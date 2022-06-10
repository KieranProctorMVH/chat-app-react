import AppLayout from '@/Layouts/AppLayout';
import React from 'react';

interface Props {}

const ChatsIndex: React.FC<Props> = ({}) => {
  return (
    <AppLayout
      title={'Chats'}
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Profile
        </h2>
      )}
    >
      <div className="py-12">
        <div className="max-w-site mx-auto tablet:px-6 desktop:px-8">
          <div className="grid grid-cols-1 gap-4 items-start desktop:grid-cols-3 desktop:gap-8">
            {/* Friends */}
            <div className="grid grid-cols-1 gap-4">
              <section aria-labelledby="section-2-title">
                <h2 className="sr-only" id="section-2-title">
                  Section title
                </h2>
                <div className="rounded-lg bg-white overflow-hidden shadow">
                  <div className="p-6">
                    <div className="h-96 border-4 border-dashed border-gray-200 rounded-lg"></div>
                  </div>
                </div>
              </section>
            </div>

            {/* Chat */}
            <div className="grid grid-cols-1 gap-4 desktop:col-span-2">
              <section aria-labelledby="section-1-title">
                <h2 className="sr-only" id="section-1-title">
                  Section title
                </h2>
                <div className="rounded-lg bg-white overflow-hidden shadow">
                  <div className="p-6">
                    <div className="h-96 border-4 border-dashed border-gray-200 rounded-lg"></div>
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

export default ChatsIndex;
