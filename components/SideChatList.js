import ArrowLeft from '@mui/icons-material/ArrowBackIos';
import ArrowRight from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';

function ChatListChat() {
    return (
        <div className="chat-list-chat">
            <div className="chat-list-chat-img"></div>
            <h4>Chat List Name</h4>
        </div>
    );
}

function SideChatList() {
    const [chatPanel, setChatPanel] = useState(false);

    return (
        <div
            className="chat-list-container"
            style={{
                transform: chatPanel ? 'translateX(0)' : 'translateX(100%)',
            }}
        >
            <div
                className="chat-list-hideshow"
                onClick={() => {
                    setChatPanel(!chatPanel);
                }}
            >
                {chatPanel ? <ArrowRight /> : <ArrowLeft />}
            </div>
            <h2>Chats</h2>
            <ChatListChat />
            <ChatListChat />
            <ChatListChat />
            <ChatListChat />
            <ChatListChat />
        </div>
    );
}

export default SideChatList;
