#  To-Do-App

A simple and clean  task planning app that allows users to manage their tasks based on durations (Daily, Weekly, Monthly, Yearly). It includes features for adding, editing, deleting, and filtering tasks. The interface is built with **Tailwind CSS** for responsive and elegant styling.

---

##  Features

-  Add new tasks with name and duration
-  Edit existing tasks
- Delete tasks
-  Filter tasks by duration: All, Daily, Weekly, Monthly, Year
-  Beautiful, minimal UI using Tailwind CSS
-  Uses UUIDs to manage task IDs
-  Responsive layout with modern design

---


##  Built With

- React
- Tailwind CSS
-  UUID 
- React Icons

---

##  Project Structure

```bash
src/
├── components/
│   └── Home.jsx        # Main task management component
├── App.js              # Root component
├── index.js            # Entry point
└── ...



##  How to Use

1. **Choose a Duration**  
   - Use the dropdown to select how often the task occurs: `Daily`, `Weekly`, `Monthly`, or `Year`.

2. **Enter a Task Name**  
   - Type in the name of the task in the input field next to the dropdown.

3. **Add the Task**  
   - Click the **"Add Task"** button to save the task.
   - The task will be displayed in the list below.

4. **Filter Tasks**  
   - Use the buttons labeled `All`, `Daily`, `Weekly`, `Monthly`, or `Year` to filter your tasks by duration.

5. **Edit a Task**  
   - Click the edit icon to edit a task.
   - The task name and duration will appear in the input field for you to update.
   - After making changes, click the **"Update Task"** button.

6. **Delete a Task**  
   - Click the delete  icon to remove a task from the list.

> Note: All tasks are stored in memory. When you refresh the page, your task list will reset. i have to work on improve this by saving to local storage or a backend in future versions.
