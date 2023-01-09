class LS {
    addBook(book){
     let books // array for user inputs
        if(localStorage.getItem('books_oop') === null){
            books = []
        } else {
            books = JSON.parse(localStorage.getItem('books_oop'))
        }
        books.push(book)
        localStorage.setItem('books_oop', JSON.stringify(books))
    }
}