// ForumSelector component for creating new chat forums and selecting among existing ones
// It provides a user interface for forum management within the chat application.
const ForumSelector = ({ forums, createForum, setCurrentForumId }) => {
    return (
        <>
            {/* Button to create a new forum */}
            <button 
                onClick={createForum}
                className="mb-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded transition duration-300"
            >
                Create New Forum
            </button>
            {/* Horizontal scrollable list of buttons for each forum */}
            <div className="flex overflow-x-auto my-4">
                {forums.map(forum => (
                    // Button for each forum that sets the current forum on click
                    <button
                        key={forum.id}
                        onClick={() => setCurrentForumId(forum.id)}
                        className="first:ml-0 ml-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                    >
                        Forum {forum.id}
                    </button>
                ))}
            </div>
        </>
    );
};

export default ForumSelector;



