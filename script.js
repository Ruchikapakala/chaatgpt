// script.js

// Function to create a new chat item and add it to the left pane
function createNewChat() {
    var folderName = prompt("Enter the folder name for the new chat:");
    if(folderName !== null && folderName.trim() !== '') {
        //Create a new chat folder with the provided folderName
        var chatlist = document.querySelector('.chat-list');
        var chatFolder = document.createElement('div');
        chatFolder.className = 'chat';
        chatFolder.textContent = folderName;
        chatlist.appendChild(chatFolder);
    }
    
    // Add a click event listener to the new chat item to display messages in the right pane
    chatItem.addEventListener('click', () => {
        const messageDisplay = document.querySelector('.message-display');
        messageDisplay.textContent = `Display messages for ${chatItem.textContent}`;
    });
}

// Event listeners
document.querySelector('.new-chat-btn').addEventListener('click', createNewChat);

document.querySelector('.hide-pane-btn').addEventListener('click', () => {
    // Logic to hide/show the left pane
    const leftPane = document.querySelector('.left-pane');
    const showSidebarBtn = document.querySelector('.show-sidebar-btn');
    
    leftPane.classList.toggle('hidden');
    showSidebarBtn.style.display = leftPane.classList.contains('hidden') ? 'block' : 'none';
   
});
    function showLeftPane() {
    const leftPane = document.querySelector('.left-pane');
    const showSidebarBtn = document.querySelector('.show-sidebar-btn');
    
    leftPane.classList.remove('hidden');
    showSidebarBtn.style.display = 'none';
}

document.querySelector('.send-btn').addEventListener('click', () => {
    // Logic to send a message and display it in the right pane
    const messageInput = document.getElementById('message-input');
    const messageDisplay = document.querySelector('.message-display');
    const messageText = messageInput.value;
    
    if (messageText.trim() !== '') {
        // Display the sent message in the message display
        messageDisplay.innerHTML += `<div class="sent-message">${messageText}</div>`;
        
        // Clear the input field
        messageInput.value = '';
    }
    // Function to toggle the visibility of the left pane
    function toggleLeftPane() {
    const leftPane = document.querySelector('.left-pane');
    leftPane.classList.toggle('hidden');
}
function hoverBox(box) {
    box.style.backgroundColor = "#d0d0d0";
    const icon = box.querySelector(".box-icon");
    icon.style.display = "block";
}

function unhoverBox(box) {
    box.style.backgroundColor = "#fff";
    const icon = box.querySelector(".box-icon");
    icon.style.display = "none";
}

});

       

