import { useMoralis } from "react-moralis";
import TimeAgo from "timeago-react";

function Message({ message }) {
    const { user } = useMoralis();

    const isUserMessage = message.get('ethAddress') === user.get('ethAddress');
    const now = new Date(Date.now() - 1000 * 60 * 2);
    const now5 = new Date(Date.now() - 1000 * 60 * 2);
    const now0 = new Date(Date.now() - 1000 * 60);

    return (
        <div className={`flex flex-col space-x-2 my-5 ${isUserMessage ? 'justify-end items-end' : 'items-start'}`}>
            <div className={`space-x-4 px-3 py-1 max-w-sm rounded-2xl ${isUserMessage ? 'rounded-br-none bg-green-600 text-white' : 'rounded-bl-none bg-gray-300'}`}>
                <p>{message.get('message')}</p>
            </div>
            <TimeAgo 
                datetime={message.createdAt}
                className={`text-xs italic text-gray-400 ${isUserMessage && 'order-last pr-1'}`}
            />
        </div>
    )
}

export default Message
