// Message component to display a single message in a chat
// This component is responsible for rendering individual chat messages, 
// showing the sender's name and the message text.
const Message = ({ text, sender }) => {
    return (
        <div className="p-2 my-1 bg-white rounded shadow">
            {/* Display sender's name in bold and the message text */}
            <strong className="font-semibold">{sender}:</strong>
            <p>{text}</p>
        </div>
    );
};

export default Message;
