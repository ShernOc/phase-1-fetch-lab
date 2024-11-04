document.addEventListener("DOMContentLoaded", function(){

// get the background image of GOT  main element
const main = document.querySelector('main')
main.style.backgroundImage = " url('images/got.png')";
main.style.backgroundRepeat = "no-repeat"; 
main.style.backgroundSize = "100%"

// call the fetch function 
function fetchBooks(){
  // To pass the tests, don't forget to return your fetch!
  fetch('https://anapioficeandfire.com/api/books')
  .then((res) => res.json())
  .then((data) => renderBooks(data));
}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `<main>
    <h2>${book.name}</h2>
    <p><span> Total pages: ${book.numberOfPages}</span>
    <br>
    <span>Author: ${book.authors}</span>
    <main>`
    newDiv.style.color= "beige"
    main.appendChild(newDiv);
  });
}

 fetchBooks();

});