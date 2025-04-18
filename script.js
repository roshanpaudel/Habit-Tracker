const handleOnSubmit = (e) => {
  const newForm = new FormData(e);
  taskInput = newForm.get("task");
  hoursInput = newForm.get("hours");
  console.log(taskInput, hoursInput);
};
