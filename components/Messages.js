import { useMoralisQuery } from 'react-moralis';
import Message from './Message';
import React, { useRef, Component } from 'react';
import SendMessage from './SendMessage';

const MINT_DURATION = 15;

function Messages() {
    const endOfMsgRef = useRef(null);

    const { data, loading, error } = useMoralisQuery(
        'Messages',
        (query) => 
            query
                .ascending('createdAt')
                .greaterThan(
                    'createdAt',
                    new Date(Date.now() - 1000 * 60 * 60 * MINT_DURATION)
                ),
        [],
        {
            live: true
        }
    );

    //endOfMsgRef.current.scrollIntoView({ behavior: "smooth" });

    return (
        <div className='relative bg-gray-100 dark:bg-gray-700 flex flex-col overflow-auto justify-between h-full'>
            <div className='overflow-y-auto px-2'>
                {data.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
                <p ref={endOfMsgRef} className='text-center text-gray-100'></p>
            </div>
            <div>
                <SendMessage endOfMsgRef={endOfMsgRef} />
            </div>
        </div>
    )
}

export default Messages
