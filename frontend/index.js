const container = document.getElementById('smallSquareContainer');
const loadMoreButton = document.getElementById('loadMoreButton');
const resultsPerPage = 12;
let currentPage = 1;



function showLogInModal() {
    const modal = document.getElementById('logInModal');
    modal.style.display = 'flex';
}

function showRegistrationModal() {
    const modal = document.getElementById('registrationModal');
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('logInModal');
    modal.style.display = 'none';
    const registrationModal = document.getElementById('registrationModal');
    registrationModal.style.display = 'none';
}
// Функция для регистрации пользователя
async function register() {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Создаем объект данных для отправки на сервер
    const data = {
        email: email,
        password: password
    };

    try {
        const response = await fetch('http://localhost:5500/регистрация', { //добавить урлу сервера
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log('Пользователь успешно зарегистрирован:', responseData);
            closeModal('registrationModal');
            // Дополнительные действия при успешной регистрации, например, перенаправление на другую страницу
        } else {
            const errorData = await response.json();
            console.error('Ошибка регистрации:', errorData);
            // Дополнительные действия при ошибке регистрации, например, отображение сообщения об ошибке
        }
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        // Дополнительные действия при ошибке сети или другой внутренней ошибке
    }
}

// Функция для авторизации пользователя
async function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Создаем объект данных для отправки на сервер
    const data = {
        email: email,
        password: password
    };

    try {
        const response = await fetch('http://localhost:5500/авторизация', { //добавить урлу сервера
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log('Пользователь успешно авторизован:', responseData);
            closeModal('logInModal');
            // Дополнительные действия при успешной авторизации, например, перенаправление на другую страницу
        } else {
            const errorData = await response.json();
            console.error('Ошибка авторизации:', errorData);
            // Дополнительные действия при ошибке авторизации, например, отображение сообщения об ошибке
        }
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        // Дополнительные действия при ошибке сети или другой внутренней ошибке
    }
}


function showPage(pageNumber) {
    container.innerHTML = '';

    for (let i = 0; i < resultsPerPage * pageNumber; i++) {
        const smallSquare = document.createElement('div');
        smallSquare.classList.add('small-square');
        smallSquare.textContent = `Название проекта ${i + 1}`;
        container.appendChild(smallSquare);
    }
}

function loadMoreProjects() {
    currentPage++;
    showPage(currentPage);
}

loadMoreButton.addEventListener('click', loadMoreProjects);


showPage(currentPage);

// Получаем ссылки на поля ввода и кнопку входа
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const loginButton = document.getElementById('loginButton');

// Функция для проверки введенных данных и изменения цвета кнопки входа
function checkInputs() {
    // Проверяем, заполнены ли оба поля ввода
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (emailValue !== '' && passwordValue !== '') {
        // Если оба поля ввода заполнены, устанавливаем цвет кнопки входа
        loginButton.style.backgroundColor = '#4F46E5';
        loginButton.style.color = '#fff'; // Зеленый цвет, если все данные введены
    } else {
        // Если одно из полей ввода пустое, устанавливаем цвет кнопки по умолчанию
        loginButton.style.backgroundColor = '#F1F5F9';
        loginButton.style.color = '#94A3B8'; // Синий цвет, если не все данные введены
    }
}

// Слушаем события ввода в поля ввода и вызываем функцию checkInputs
emailInput.addEventListener('input', checkInputs);
passwordInput.addEventListener('input', checkInputs);

checkInputs();

function togglePasswordVisibility() {
    const passwordField = document.getElementById('passwordInput');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}

function togglePasswordVisibility1() {
    const passwordField = document.getElementById('passwordInputReg');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}

function togglePasswordVisibility2() {
    const passwordField = document.getElementById('passwordInputReg2');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}

const emailInputReg = document.getElementById('emailInputReg');
const passwordInputReg = document.getElementById('passwordInputReg');
const passwordInputReg2 = document.getElementById('passwordInputReg2');
const regButton = document.getElementById('regButton');

// Функция для проверки введенных данных и изменения цвета кнопки входа
function checkInputs2() {
    // Проверяем, заполнены ли оба поля ввода
    const emailValue = emailInputReg.value.trim();
    const passwordValue = passwordInputReg.value.trim();
    const passwordValue2 = passwordInputReg2.value.trim();

    if (emailValue !== '' && passwordValue !== '' && passwordValue2 !== '') {
        // Если оба поля ввода заполнены, устанавливаем цвет кнопки входа
        regButton.style.backgroundColor = '#4F46E5';
        regButton.style.color = '#fff'; // Зеленый цвет, если все данные введены
    } else {
        // Если одно из полей ввода пустое, устанавливаем цвет кнопки по умолчанию
        regButton.style.backgroundColor = '#F1F5F9';
        regButton.style.color = '#94A3B8'; // Синий цвет, если не все данные введены
    }
}

// Слушаем события ввода в поля ввода и вызываем функцию checkInputs
emailInputReg.addEventListener('input', checkInputs2);
passwordInputReg.addEventListener('input', checkInputs2);
passwordInputReg2.addEventListener('input', checkInputs2);

checkInputs2();