class Library {
  constructor(books = []){
    this.books = books;
    this.authorTitle = '';
  }

  bookCount(){
    return this.books.length;
  }

  addBook(newBook){
    this.books.push(newBook);
  }

  addBooks(newBooks){
    //newBooks.forEach(book => this.books.push(book));
    // spread operator to unpack the fields title and author from the parameter book
    this.books = [...this.books, ...newBooks];
  }

  printInventory(){
    this.books.forEach(({ author, title }) => {
        this.authorTitle += `${title} by ${author}, `;
    });
    return this.authorTitle.slice(0, -2); 
  }
}

export default Library;