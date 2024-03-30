import { useState } from 'react';
import MessageList from './MessageList';
import MessageSender from './MessageSender';
import ForumSelector from './ForumSelector';

// Main Chat component that orchestrates the chat functionality
// This component acts as the central hub, managing state and coordinating interactions
// between the child components (MessageList, MessageSender, ForumSelector).
const Chat = () => {
    // forums: Array to hold forum objects
    // currentForumId: Identifier for the currently active forum
    // sender: Designation of the current sender, either 'Patient' or 'Doctor'
    const [forums, setForums] = useState([]);
    const [currentForumId, setCurrentForumId] = useState(null);
    const [sender, setSender] = useState('Patient');

    // Function to create a new forum and add it to the forums array
    // This also sets the newly created forum as the current active forum
    const createForum = () => {
        const newForum = { id: forums.length + 1, messages: [], files: [] };
        setForums([...forums, newForum]); // Add the new forum to the existing list
        setCurrentForumId(newForum.id); // Set this new forum as the current forum
    };

    return (
        <div className="flex flex-col items-center justify-center p-4 w-full max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Patient-Doctor Chat</h1>
            {/* ForumSelector allows users to create a new forum or switch between existing forums */}
            <ForumSelector
                forums={forums}
                createForum={createForum}
                setCurrentForumId={setCurrentForumId}
            />
            <div className="w-full mb-4">
                {/* Dropdown to select whether the message sender is a Patient or a Doctor */}
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Sender:
                    <select
                        value={sender}
                        onChange={(e) => setSender(e.target.value)}
                        className="form-select block w-full mt-1 border border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    >
                        <option value="Patient">Patient</option>
                        <option value="Doctor">Doctor</option>
                    </select>
                </label>
            </div>
            {/* MessageList displays the messages and files of the currently selected forum */}
            <MessageList
                forums={forums}
                currentForumId={currentForumId}
                sender={sender}
            />
            {/* MessageSender provides the input and actions to send new messages and files */}
            {currentForumId && (
                <MessageSender
                    forums={forums}
                    setForums={setForums}
                    currentForumId={currentForumId}
                    sender={sender}
                />
            )}
        </div>
    );
};

export default Chat;
