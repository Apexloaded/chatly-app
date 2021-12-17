import { useMoralis } from "react-moralis";
import TimeAgo from "timeago-react";

function Message({ message }) {
    const { user } = useMoralis();

    const isUserMessage = message.get('ethAddress') === user.get('ethAddress');
    const now = new Date(Date.now() - 1000 * 60 * 2);
    const now5 = new Date(Date.now() - 1000 * 60 * 2);
    const now0 = new Date(Date.now() - 1000 * 60);

    return (
        <div className={`flex items-end flex-col space-x-2 my-5 relative ${isUserMessage && 'justify-end'}`}>
            <div className={`flex space-x-4 px-3 py-1 rounded-2xl ${isUserMessage ? 'rounded-br-none bg-green-600 text-white' : 'rounded-bl-none bg-gray-300'}`}>
                <p>{message.get('message')}</p>
            </div>
            <TimeAgo 
                datetime={message.createdAt}
                className={`text-xs italic text-gray-400 ${isUserMessage && 'order-last pr-1'}  ${message.createdAt > now ? 'hidden' : ''}`}
            />
        </div>
    )
}

export default Message
