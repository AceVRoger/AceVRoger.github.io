// grabbing items from local storage and putting them into an array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// session storage data
let taskCount = sessionStorage.getItem('taskCount') ? parseInt(sessionStorage.getItem('taskCount')) : 0;

const TODOForm = document.getElementById('TodoForm');
const TODOInput = document.getElementById('TodoInput');
const TODOList = document.getElementById('TodoList');
const addButton = document.getElementById('add');
const clearButton = document.getElementById('clear');
const taskCountDisplay = document.getElementById('taskCount');
const colorBtn = document.getElementById('theme');
const quoteContainer = document.getElementById('quoteContainer');
const quoteElement = document.getElementById('quote');
const fetchQuoteButton = document.getElementById('fetchQuote');

function taskCountDisplayUpdate() {
    taskCountDisplay.textContent = `Tasks added throughout current session: ${taskCount}`;
}

function CreateList() {
    TODOList.innerHTML = 'TODO List:';
    tasks.forEach((task, index) => {
        const TODOItem = document.createElement('li');
        TODOItem.textContent = task;

        // adding a remove button to each Item
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeTask(index);
        TODOItem.appendChild(removeButton);
        TODOList.appendChild(TODOItem);
    });
}

// adding to list
function addTask(event) {
    event.preventDefault();
    const task = TODOInput.value.trim();
    if (task) {
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        taskCount++;
        sessionStorage.setItem('taskCount', taskCount);

        TODOInput.value = '';

        // updating
        CreateList();
        taskCountDisplayUpdate();
    }
}

// removing from list
function removeTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    CreateList();
    taskCountDisplayUpdate();
}

// event listener for clicking
addButton.addEventListener('click', addTask);

// event listener for pressing enter
TODOInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask(event);
    }
});

clearButton.addEventListener('click', () => {
    tasks = [];
    localStorage.setItem('tasks', JSON.stringify(tasks));

    taskCount = 0;
    sessionStorage.setItem('taskCount', taskCount);

    CreateList();
    taskCountDisplayUpdate();
});

function theme() {
    const currTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currTheme === 'light' ? 'dark' : 'light';

    document.body.classList.remove(currTheme);
    document.body.classList.add(newTheme);

    //saving theme in cookies
    document.cookie = `theme=${newTheme}; path=/; max-age=60000000`
}

// applying theme to page
function applyTheme() {
    const themeCookie = document.cookie.split('; ').find(row => row.startsWith('theme='));
    if (themeCookie) {
        const savedTheme = themeCookie.split('=')[1];
        document.body.classList.add(savedTheme);
    } else {
        document.body.classList.add('light');
    }
}

colorBtn.addEventListener('click', theme);

async function fetchQuote() {
    try {
        const response = await fetch('https://aot-api.vercel.app/quote');
        if (!response.ok) {
            throw new Error('Failed to find a quote.');
        }
        const data = await response.json();

        console.log(data);

        quoteElement.innerHTML = `"${data.quote}" <br>- ${data.author}`;
    } catch (error) {
        quoteElement.textContent = 'Unable to find a quote at the time.'
    }
}

fetchQuoteButton.addEventListener('click', fetchQuote);

CreateList();
taskCountDisplayUpdate();
applyTheme();