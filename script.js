let taskList = [];
let allowedHrs = 24 * 7;

const handleOnSubmit = (e) => {
  const newForm = new FormData(e);
  taskInput = newForm.get("task");
  hoursInput = +newForm.get("hours");
  const obj = {
    taskInput,
    hoursInput,
    id: uniqueIDGenerator(),
    type: "entry",
  };

  let currentHour = totalEnteredHours();
  if (currentHour + hoursInput > allowedHrs) {
    return alert(
      `Sorry you cannot add more than ${allowedHrs - currentHour} hrs`
    );
  }
  taskList.push(obj);
  displayEnterList();
};

const displayEnterList = () => {
  const listItems = document.getElementById("entryList");
  totalEnteredHours();
  let str = "";
  entryList = taskList.filter((item) => item.type == "entry");
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
  listItems.innerHTML = str;
};
const displayHabitList = () => {
  const listItems = document.getElementById("habitList");
  let str = "";
  habitList = taskList.filter((item) => item.type === "habits");

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
  listItems.innerHTML = str;

  displayHabitHrs = document.getElementById("habithrs");
  displayHabitHrs.innerText = habitList.reduce(
    (acc, item) => acc + item.hoursInput,
    0
  );
};

const uniqueIDGenerator = (length = 6) => {
  const str = "qwertyuiopasdfghjklzxcvbnm1234567890";
  let uniqueID = "";
  for (let i = 0; i < length; i++) {
    let strIndex = Math.floor(Math.random() * str.length);
    uniqueID += str[strIndex];
  }
  console.log(uniqueID);
  return uniqueID;
};

const deleteOnCLick = (id) => {
  if (window.confirm("Are you sure you want to delete?")) {
    taskList = taskList.filter((item) => item.id !== id);
    console.log(taskList);
    displayEnterList();
    displayHabitList();
  }
};

const switchItems = (id, type) => {
  taskList.map((item) => {
    if (item.id === id) {
      item.type = type;
    }
  });

  displayEnterList();
  displayHabitList();
};

const totalEnteredHours = () => {
  displayEnteredHrs = document.getElementById("totalhrs");
  let totalHrs = taskList.reduce((acc, item) => acc + item.hoursInput, 0);
  displayEnteredHrs.innerText = totalHrs;
  return totalHrs;
};
