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

function showPage(pageNumber) {
    container.innerHTML = ''; // Clear existing content

    const startIndex = (pageNumber - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;

    for (let i = startIndex; i < endIndex; i++) {
        const smallSquare = document.createElement('div');
        smallSquare.classList.add('small-square');
        smallSquare.textContent = `Item ${i + 1}`; // Add text content
        container.appendChild(smallSquare);
    }
}

// Show the initial page
showPage(currentPage);