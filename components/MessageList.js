import Message from './Message';

// MessageList component to display all messages and files in a specific chat forum
// It fetches and renders the list of messages and files for the current forum.
const MessageList = ({ forums, currentForumId, sender }) => {
    // Find the messages and files for the current forum based on currentForumId
    const messages = currentForumId ? forums.find(forum => forum.id === currentForumId)?.messages : [];
    const files = currentForumId ? forums.find(forum => forum.id === currentForumId)?.files : [];

    return (
        <div className="w-full mb-4 bg-white shadow p-4 rounded border border-gray-200">
            {/* Iterate over messages array and render each Message component */}
            {messages.map((msg, index) => (
                <Message key={index} text={msg.text} sender={msg.sender} />
            ))}
            {/* List files as clickable links */}
            {files.map((file, index) => (
                <div key={index} className="p-2">
                    {/* Display file sender and link to the file */}
                    <strong>{file.sender}:</strong> 
                    <a className="text-blue-500 underline" href={file.file} target="_blank" rel="noopener noreferrer">{file.fileName}</a>
                </div>
            ))}
        </div>
    );
};

export default MessageList;

