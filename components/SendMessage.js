import React, { useState, useEffect } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/outline';
import { useMoralis } from 'react-moralis';


function SendMessage({ endOfMsgRef }) {
    const { user, Moralis } = useMoralis();
    const [message, setMessage] = useState('');

    const scrollToBottom = (prop) => {
        endOfMsgRef.current.scrollIntoView(prop);
    }

    useEffect(() => {
        if(endOfMsgRef.current) {
            scrollToBottom();
        }
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        if(!message) return;

        const Messages = Moralis.Object.extend("Messages");
        const messages = new Messages();

        messages.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get('ethAddress')
        })
        .then(
            (msg) => {
                scrollToBottom({ behavior: "smooth" });
                //endOfMsgRef.current.scrollIntoView({ behavior: "smooth" });
            },
            (err) => {

            }
        )

        setMessage('');
    };


    return (
        <div className="bg-white max-w-2xl w-full shadow-2xl border-t border-gray-300">
            <form>
                <div className='flex px-2 space-x-4'>
                    <input 
                        type="text"
                        className="w-full outline-none py-3"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder={`Send Message ${user.getUsername()}`} 
                    />
                    <button type='submit' onClick={sendMessage}>
                        <PaperAirplaneIcon className="navBtn rotate-90 h-7"/>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage
