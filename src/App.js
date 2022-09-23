import React, { useState } from "react";
import "./App.css";
// TODO: import the Reminder component
// TODO: import the Header component
import Header from "./components/Header";
import Reminder from "./components/Reminder";

function App() 
{
    // this is the object to define the properties of a reminder
    const initialReminder =  {title: "", completed:false, id:0}

    // state variables for a reminder
    const [reminder, setReminder] = useState(initialReminder)

    // state variable that stores the list of reminders
    const [reminders, setReminders] = useState([])

    // state variable used to toggle between displaying the oustanding or completed reminders on the page
    const [showCompletedReminders, setShowCompletedReminders] = useState(false)

  // Helper Functions

  /* 
    TODO: Complete this method to set a new reminder object to the reminder state variable:
    Hint: i. create an object following the initialReminder object property
          ii. ID should be generated randomly (You can use Math.floor(Math.random() * 1000))
  */
  function setNewReminder(e)
  {
    const value = e.target.value;
    const n_Reminder =
    {
      title: value,
      completed: false,
      id: Math.floor(Math.random() * 1000),
    };

    setReminder(n_Reminder);
  }

  /*
    TODO: Complete this method to add a reminder to the reminders array
  */
  function addReminder() 
  {
    if (reminder.title !== "") 
    {
      setReminders([reminders, reminder]);
    }
    const n_Reminder = 
    {
      title: "",
      completed: false,
      id: Math.floor(Math.random() * 1000),
    };

    setReminder(n_Reminder);
  }
  
  /*
    TODO: Complete this method to mark the reminder with the "id" argument as completed. 
  */
  function completeReminder(id)
  {
    const changedReminders = reminders.map((reminder) => 
    {
      if (reminder.id === id)
      {
        reminder.completed = true;
      }
       return reminder;
    });

  setReminders(changedReminders);
  }
  /*
    TODO: Complete this method to retrieve the reminders to be displayed based on showCompletedReminders value
    Hint: i) if showCompletedReminders is false, retrieved reminders that have not been completed and vice versa
          ii) you should return the retrieved reminders
  */
  function displayedReminders() 
  {
    if (showCompletedReminders)
    {
      retrievedReminders = reminders.filter(
        (reminder) => reminder.completed === true
      );
    } 
    else
    {
      retrievedReminders = reminders.filter(
        (reminder) => reminder.completed === false
      );
    }

    return retrievedReminders;// You should delete this; it's just notifying that your method should return an array
  }


  /*
    TODO: Complete this method to delete the reminder with the passed "id"
  */
  function deleteReminder(id) 
  {
    const n_Reminders = reminders.filter
    (
      (reminder) => reminder.id !== id
    );
    setReminders(n_Reminders);
  }


  // Main part of app
  return (
    <div className="app">
      {/* TODO: Add the Header component */}
      <Header />
      <input
        type="text"
        placeholder="Add a new reminder.."
        value={reminder.title}
        onChange={(e) => setNewReminder(e)}
      />

      {/* TODO: Add a button elementwith onClick that calls the addReminder() */}
      <button onClick={addReminder}>Add Reminder</button>
      <div>
        <p>Showing : {showCompletedReminders ? 'Completed': 'Outstanding'} reminders</p>
        <p>Click to <button onClick={() => setShowCompletedReminders((showCompleted) => !showCompleted)}> Show {showCompletedReminders ? "outstanding": "completed"} reminders</button></p>
      </div>

      {displayedReminders().map((reminder) => (
        <div>
           {/* TODO:  Add the Reminder component
               Hint: Pass both the reminder object and showCompletedReminders variable as props to the component
           */}
           <Reminder
            reminder={reminder}
            showCompletedReminders={showCompletedReminders}
          />

          {/* TODO:  i. Add a complete button element that a user can use to indicate a reminder is completed.
                    ii. Only show this button when the showCompletedReminders is false
               Hint: Call the appropriate helper method already defined above on it's onClick event.
                    ii. Use the my-button className for styling
                    iii. Use  "Complete  ✅" as the button's content
           */}
          {showCompletedReminders ? (
            ""
          ) : (
            <button
              className="my-button"
              onClick={() => completeReminder(reminder.id)}
            >
              Complete ✅
            </button>
          )}
          {/* TODO:  Add a delete button element to delete a reminder
               Hint: Call the appropriate helper method already defined above on it's onClick event.
                    ii. Use the my-button className for styling
                    iii. Use "❌" as the button's content
           */}
           <button
            className="my-button"
            onClick={() => deleteReminder(reminder.id)}
          >
             ❌
          </button>
        </div>
      ))}
    </div>
  );
}

           

export default App;