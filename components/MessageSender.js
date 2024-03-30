import { useState } from 'react';

// MessageSender component for inputting and sending new messages and files
// This component provides a user interface for sending new messages and uploading files in the chat.
const MessageSender = ({ forums, setForums, currentForumId, sender }) => {
    // input: State for storing the current text message input by the user
    // file: State for storing the current file selected by the user to send
    const [input, setInput] = useState('');
    const [file, setFile] = useState(null);

    // Function to handle sending of the message or file
    const sendMessage = (e) => {
        e.preventDefault(); // Prevent the default form submit behavior

        // Update the forums state to include the new message or file in the appropriate forum
        const updatedForums = forums.map(forum => {
            if (forum.id === currentForumId) {
                const newContent = { ...forum };
                if (input.trim()) {
                    // Add the new message to the messages array if input is not empty
                    newContent.messages = [...forum.messages, { text: input, sender }];
                }
                if (file) {
                    // Add the new file to the files array and create a URL for the uploaded file
                    newContent.files = [...forum.files, { file: URL.createObjectURL(file), fileName: file.name, sender }];
                    setFile(null); // Reset file state after sending
                }
                return newContent;
            }
            return forum;
        });

        setForums(updatedForums); // Update the forums state with the new forum content
        setInput(''); // Clear the message input field after sending
    };

    return (
        <form onSubmit={sendMessage} className="w-full flex flex-col">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="mb-3 p-3 border border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Type a message"
            />
            <input
                type="file"
                className="mb-3"
                onChange={(e) => setFile(e.target.files[0])}
            />
            <button 
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
                Send
            </button>
        </form>
    );
};

export default MessageSender;

