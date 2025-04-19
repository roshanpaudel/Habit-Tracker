let taskList = []; // Array to store task objects
let allowedHrs = 24 * 7; // Maximum allowed hours per week

// Function to handle form submission for adding a new task
const handleOnSubmit = (e) => {
  // Get form data
  const newForm = new FormData(e);
  taskInput = newForm.get("task");
  hoursInput = +newForm.get("hours"); // Convert hours to number

  // Create task object
  const obj = {
    taskInput,
    hoursInput,
    id: uniqueIDGenerator(), // Generate unique ID
    type: "entry", // Initial task type
  };

  // Check if adding hours exceeds allowed limit
  let currentHour = totalEnteredHours();
  if (currentHour + hoursInput > allowedHrs) {
    return alert(
      `Sorry you cannot add more than ${allowedHrs - currentHour} hrs`
    );
  }

  // Add task to task list and update display
  taskList.push(obj);
  displayEnterList();
};

// Function to display tasks in the "Entry List" table
const displayEnterList = () => {
  const listItems = document.getElementById("entryList"); // Get table body
  totalEnteredHours(); // Update total hours display
  let str = ""; // Initialize HTML string for table rows
  entryList = taskList.filter((item) => item.type == "entry"); // Filter for "entry" type tasks

  // Generate table rows for each entry task
  entryList.map((item, i) => {
    str += ` <tr><td scope="row">${i + 1}</td>
                  <td>${item.taskInput}</td>
                  <td>${item.hoursInput}</td>
                  <td class="text-end">
                    <button onclick="deleteOnCLick('${
                      item.id
                    }')" class="btn btn-danger">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                    <button onclick="switchItems('${
                      item.id
                    }','habits')" class="btn btn-success">
                      <i class="fa-solid fa-arrow-right"></i>
                    </button> </td></tr>`;
  });
  listItems.innerHTML = str; // Update table HTML
};

// Function to display tasks in the "Habits to reduce" table
const displayHabitList = () => {
  const listItems = document.getElementById("habitList"); // Get table body
  let str = ""; // Initialize HTML string
  habitList = taskList.filter((item) => item.type === "habits"); // Filter for "habits" type tasks

  // Generate table rows for each habit task
  habitList.map((item, i) => {
    str += ` <tr>
                  <td scope="row">${i + 1}</td>
                  <td>${item.taskInput}</td>
                  <td>${item.hoursInput}</td>
                  <td class="text-end">
                    <button onclick="switchItems('${
                      item.id
                    }','entry')" class="btn btn-warning">
                      <i class="fa-solid fa-arrow-left"></i>
                    </button>
                    <button onclick="deleteOnCLick('${
                      item.id
                    }')" class="btn btn-danger">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>`;
  });
  listItems.innerHTML = str; // Update table HTML

  // Calculate and display total habit hours
  displayHabitHrs = document.getElementById("habithrs");
  displayHabitHrs.innerText = habitList.reduce(
    (acc, item) => acc + item.hoursInput,
    0
  );
};

// Function to generate a unique ID for tasks
const uniqueIDGenerator = (length = 6) => {
  const str = "qwertyuiopasdfghjklzxcvbnm1234567890"; // Character pool
  let uniqueID = "";
  for (let i = 0; i < length; i++) {
    let strIndex = Math.floor(Math.random() * str.length); // Get random character index
    uniqueID += str[strIndex]; // Append character to ID
  }
  console.log(uniqueID);
  return uniqueID;
};

// Function to delete a task
const deleteOnCLick = (id) => {
  if (window.confirm("Are you sure you want to delete?")) {
    // Confirm deletion
    taskList = taskList.filter((item) => item.id !== id); // Filter out task to delete
    console.log(taskList);
    displayEnterList(); // Update display
    displayHabitList();
  }
};

// Function to switch a task between "entry" and "habits"
const switchItems = (id, type) => {
  taskList.map((item) => {
    if (item.id === id) {
      item.type = type; // Update task type
    }
  });

  displayEnterList(); // Update display
  displayHabitList();
};

// Function to calculate and display total entered hours
const totalEnteredHours = () => {
  displayEnteredHrs = document.getElementById("totalhrs"); // Get display element
  let totalHrs = taskList.reduce((acc, item) => acc + item.hoursInput, 0); // Calculate total hours
  displayEnteredHrs.innerText = totalHrs; // Update display
  return totalHrs;
};
