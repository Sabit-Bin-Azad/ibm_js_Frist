let books = [];

function addBook() {
            const bookName = document.getElementById('bookName').value;
            const authorName = document.getElementById('authorName').value;
            const bookDescription = document.getElementById('bookDescription').value;
            const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
            if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
                const book = {
                    name: bookName,
                    authorName: authorName,
                    bookDescription: bookDescription,
                    pagesNumber: pagesNumber
                };
                books.push(book);
                showbooks();
                clearInputs();
            } else {
                alert('Please fill in all fields correctly.');
            }
        }

function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>Book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <!--delete button-->
        <button onclick="deletebook(${index})">Delete Book</button>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}  


function clearInputs() {
            document.getElementById('bookName').value = '';
            document.getElementById('authorName').value = '';
            document.getElementById('bookDescription').value = '';
            document.getElementById('pagesNumber').value = '';
 }



function deletebook(index) {
    if (index >= 0 && index < books.length) { // Check if index is valid
        books.splice(index, 1); // Remove the book at the specified index
        console.log(`Book at index ${index} has been deleted.`);
        console.log("Updated books list:", books);
    } else {
        console.log("Invalid index. No book deleted.");
    }
}


// for deleting
function deletebook(index) {

        books.splice(index, 1);
        showbooks(); // Refresh the displayed list
    
}