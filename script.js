let taskList = [];

const handleOnSubmit = (e) => {
  const newForm = new FormData(e);
  taskInput = newForm.get("task");
  hoursInput = newForm.get("hours");
  const obj = {
    taskInput,
    hoursInput,
    id: uniqueIDGenerator(),
  };
  taskList.push(obj);
  enterList();
};

const enterList = () => {
  const listItems = document.getElementById("entryList");
  let str = "";
  taskList.map((item, i) => {
    str += ` <tr><td scope="row">${i + 1}</td>
                  <td>${item.taskInput}</td>
                  <td>${item.hoursInput}</td>
                  <td class="text-end">
                    <button class="btn btn-danger">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                    <button class="btn btn-success">
                      <i class="fa-solid fa-arrow-right"></i>
                    </button> </td></tr>`;
  });
  listItems.innerHTML = str;
};

const uniqueIDGenerator = (length = 6) => {
  const str = "qwertyuiopasdfghjklzxcvbnm1234567890";
  let uniqueID = "";
  for (let i = 0; i < length; i++) {
    let strIndex = Math.floor(Math.random() * str.length);
    uniqueID += indexOf(strIndex);
  }
  console.log(uniqueID);
  return uniqueID;
};
