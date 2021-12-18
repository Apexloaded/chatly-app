import { useMoralisQuery } from 'react-moralis';
import Message from './Message';
import React, { useRef, useState } from 'react';
import SendMessage from './SendMessage';
import { useMutationObserver } from 'react-use-observer'

const MINT_DURATION = 15;

function Messages() {
    const endOfMsgRef = useRef(null);
    const [isTyping, setIsTyping] = useState('');
    //const isUserMessage = message.get('ethAddress') === user.get('ethAddress');

    const [msgRef, mutationRecord] = useMutationObserver({
        attributes: true,
        childList: true,
        subtree: true,
    });

    const childToParent = (isTyping) => {
        setIsTyping(isTyping);
    }

    if(mutationRecord.type === 'childList') {
        endOfMsgRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }

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

    return (
        <div className='relative bg-gray-100 dark:bg-gray-700 flex flex-col overflow-auto justify-between h-full'>
            <div className='overflow-y-auto px-2' ref={msgRef}>
                {data.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
                <p ref={endOfMsgRef} className={`text-gray-100 transition text-sm mb-1`}>
                    <span className={`${isTyping ? '' : 'hidden'} font-thin`}>...typing</span>
                </p>
            </div>
            <div>
                <SendMessage endOfMsgRef={endOfMsgRef} childToParent={childToParent} />
            </div>
        </div>
    )
}

export default Messages
