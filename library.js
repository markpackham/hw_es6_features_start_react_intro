class Library {
  constructor(books = []){
    this.books = books;
  }

  bookCount(){
    return this.books.length;
  }

  addBook(newBook){
    this.books.push(newBook);
  }

  addBooks(newBooks){
    newBooks.forEach(book => this.books.push(book));
  }

  printInventory(){
    newBooks.forEach(book => this.books.push(book));
  }
}

module.exports = Library;