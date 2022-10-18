import { $ } from './utils/utils.js';

export default function App() {
  const resetInput = () => {
    $('#todo-input').value = '';
    $('#todo-input').focus();
    $('#thema-select').options[0].selected = true;
  }
  const checkInput = (todo) => {
    if (todo.replace(/\s/g, '') === '') {
      alert('다시 todo를 입력해주세요.');
      return resetInput();
    }
  };
  const addTodo = () => {
    const todo = $('#todo-input').value;
    const thema = $('#thema-select').options[$('#thema-select').selectedIndex].text;
    checkInput(todo);
    resetInput();
    console.log(todo, thema);
  };

  $('#todo-form').addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
  });
}

new App();
