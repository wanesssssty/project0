const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
};

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

let itemCount = 0;
let uncheckedCount = 0;

function newTodo() {
  const todoText = prompt("Enter TODO item:");
  if (todoText) {
    addTodoItem(todoText);
  }
}

function addTodoItem(text) {
  itemCount++;
  uncheckedCount++;

  const todoItem = document.createElement('li');
  todoItem.className = classNames.TODO_ITEM;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = classNames.TODO_CHECKBOX;
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      uncheckedCount--;
    } else {
      uncheckedCount++;
    }
    updateCounts();
  });

  const todoText = document.createElement('span');
  todoText.className = classNames.TODO_TEXT;
  todoText.textContent = text;

  // Make the TODO text editable on click
  todoText.addEventListener('click', () => {
    const newText = prompt("Edit TODO item:", todoText.textContent);
    if (newText) {
      todoText.textContent = newText;
    }
  });

  const deleteButton = document.createElement('button');
  deleteButton.className = classNames.TODO_DELETE;
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    todoItem.remove();
    itemCount--;
    if (!checkbox.checked) {
      uncheckedCount--;
    }
    updateCounts();
  });

  todoItem.appendChild(checkbox);
  todoItem.appendChild(todoText);
  todoItem.appendChild(deleteButton);
  list.appendChild(todoItem);

  updateCounts();
}

function updateCounts() {
  itemCountSpan.textContent = itemCount;
  uncheckedCountSpan.textContent = uncheckedCount;
}
