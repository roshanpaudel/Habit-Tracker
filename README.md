# Habit Tracker App

## Description

This web application is a Habit Tracker designed to help you manage your tasks and habits.

## Features

- **Add New Task:** Quickly add new tasks with a task name and allocated hours.
- **Task List:** View all entered tasks in a list, showing task name and hours.
- **Habit List:** Identify habits you want to reduce and move them to a separate list.
- **Hour Tracking:** Track the total hours allocated to tasks and the hours allocated to habits.

## Technologies Used

- HTML
- CSS (Bootstrap)
- JavaScript
- Font Awesome Icons

## Setup

1.  **Clone the repository:** (If applicable)
2.  **Open `index.html` in your browser:** The application will run directly in your browser.

## Usage

1.  **Add a New Task:**
    - Enter the task name in the "Task" input field.
    - Enter the estimated hours in the "Hours" input field.
    - Click the "Add new task" button.
2.  **View Task List:** The "Entry List" table will display all the tasks you have added.
3.  **Move a Task to Habits:**
    - In the "Entry List", click the right arrow button next to a task.
    - The task will be moved to the "Habits to reduce" list.
4.  **Move a Task from Habits to Task List:**
    _ In the "Habits to reduce" list, click the left arrow button next to a task.
    _ The task will be moved back to the "Entry List".
5.  **Delete a Task:**
    - In either the "Entry List" or the "Habits to reduce" list, click the trash icon button next to a task.
    - Confirm the deletion in the dialog box.
6.  **View Total Hours:**
    - The "Total allocated time" section displays the sum of hours for all tasks in the "Entry List".
    - The "You could have saved" displays the sum of hours for all habits in the "Habits to reduce" list.

## Code Structure

### `index.html`

- Sets up the HTML structure of the application.
- Includes CSS for styling (Bootstrap and custom styles).
- Links to `<script src="./script.js"></script>`

### `script.js`

- Contains the JavaScript logic for the application.
- Key functions:
  - `handleOnSubmit(e)`: Handles form submission to add new tasks.
  - `displayEnterList()`: Displays tasks in the "Entry List".
  - `displayHabitList()`: Displays habits in the "Habits to reduce" list.
  - `uniqueIDGenerator()`: Generates unique IDs for tasks.
  - `deleteOnCLick(id)`: Deletes a task.
  - `switchItems(id, type)`: Moves a task between "entry" and "habits" lists.
  - `totalEnteredHours()`: Calculates and displays the total allocated hours.

## Styling

- **Responsive design:** The application is designed to work well on both desktop and mobile devices.
- **Bootstrap:** Provides the layout and styling.
- **Custom CSS:** Additional styling for the wrapper and table.
