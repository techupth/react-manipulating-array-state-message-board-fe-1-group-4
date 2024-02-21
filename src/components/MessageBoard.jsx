import { useState } from "react";


function MessageBoard() {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");

  const handleMessageTextChange = (event) => {
    setMessageText(event.target.value);
  }
  const addMessage = (event) => {
    event.preventDefault();
    const newMessages = [...messages];
    newMessages.push(messageText);
    setMessages(newMessages);
    setMessageText("");
  }
  const deleteMessage = (messageIndex) => {
    const newMessages = [...messages];
    newMessages.splice(messageIndex, 1)
    setMessages(newMessages)
  }

  
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            onChange={handleMessageTextChange}
            value={messageText}
            placeholder="Enter message here"
          />
        </label>
        <button onClick={addMessage} className="submit-message-button">Submit</button>
      </div>

      <div className="board">
        {messages.map((message, index) => (
          <div key={index} className='message'>
            <h1>{message}</h1>  
          <button onClick={() => {deleteMessage(index)}} className="delete-button">x</button>
          </div>        
            ))}
      </div>
    </div>
  );
}

export default MessageBoard;
