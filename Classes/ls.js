class LS {
    addBook(book){
        let books = this.getData('books_oop')
        books.push(book)
        this.setData('books_oop', books)
    }

    getBooks(){
        return this.getData('books_oop')
    }

     getData(name){
     let data // array for user inputs
        if(localStorage.getItem(name) === null){
            data = []
        } else {
            data = JSON.parse(localStorage.getItem('books_oop'))
        }
        books.push(book)
        localStorage.setItem('books_oop', JSON.stringify(books))
         return data
    }

    setData(name, data){
        localStorage.setItem(name, JSON.stringify(data))
    }
}