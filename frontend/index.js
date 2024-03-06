const container = document.getElementById('smallSquareContainer');
const resultsPerPage = 8;
let currentPage = 1;

// Function to show the next page
function nextPage() {
    currentPage++;
    showPage(currentPage);
}

// Function to show the previous page
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

// Function to show the logIN modal
function showLogInModal() {
    const modal = document.getElementById('logInModal');
    modal.style.display = 'flex';
}
// Function to show the registration modal
function showRegistrationModal() {
    const modal = document.getElementById('registrationModal');
    modal.style.display = 'flex';
}
// Function to close the modal
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
        const response = await fetch('URL/регистрация', { //добавить урлу сервера
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
        const response = await fetch('URL/авторизация', { //добавить урлу сервера
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



// Function to show the page and add the button to each container
function showPage(pageNumber) {
    container.innerHTML = '';

    for (let i = 0; i < resultsPerPage; i++) {
        const smallSquare = document.createElement('div');
        smallSquare.classList.add('small-square');
        smallSquare.textContent = `Item ${(pageNumber - 1) * resultsPerPage + i + 1}`;
        container.appendChild(smallSquare);


        const submitButton = document.createElement('button');
        submitButton.classList.add('submit-request');
        submitButton.textContent = 'Подать заявку';
        submitButton.addEventListener('click', showLogInModal);
        smallSquare.appendChild(submitButton);
    }
}

// Show the initial page
showPage(currentPage);