window.onload = async () => {
  // http://localhost:5234/api/TodoItems/xml

  const response = await fetch("http://localhost:5234/api/TodoItems/xml");
  const data = await response.text();

  //console.log(data);

  let parser = new DOMParser();
  let xmlDoc = parser.parseFromString(data, "text/xml");

  let todoItems = xmlDoc.getElementsByTagName("TodoItem");
  for (let i = 0; i < todoItems.length; i++) {
    let todoItem = todoItems[i];
    console.log(todoItem);
    console.log(
      "Id : " + todoItem.getElementsByTagName("TodoItemId")[0].textContent
    );
    console.log(
      "Task : " + todoItem.getElementsByTagName("Task")[0].textContent
    );
    console.log(
      "IsComplete : " +
        todoItem.getElementsByTagName("IsComplete")[0].textContent
    );
  }
};
