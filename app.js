/* eslint-disable no-console */
const body = document.querySelector('body');

const myLibrary = [];

function Book(title, author, pages, isRead) {
    // constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    // do stuff here
    myLibrary.push(book);
}

function displayLibrary() {
    myLibrary.forEach (book => {
        const card = document.createElement('div');
        const cardTitle = document.createElement('p');
        const cardAuthor = document.createElement('p');
        const cardPages = document.createElement('p');
        const cardIsRead = document.createElement('p');
        cardTitle.textContent = book.title;
        cardAuthor.textContent = book.author;
        cardPages.textContent = book.pages;
        cardIsRead.textContent = (book.isRead) ? "Already read" : "Not yet read";
        card.appendChild(cardTitle);
        card.appendChild(cardAuthor);
        card.appendChild(cardPages);
        card.appendChild(cardIsRead);
        card.classList.add('card');
        body.appendChild(card);
    });
}

const book1 = new Book("Title", "Author", 10, false);
const book2 = new Book("Title 2", "Author 2", 20, true);
addBookToLibrary(book1);
addBookToLibrary(book2);
displayLibrary();