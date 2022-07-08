
async function getBooks() {
    let response = await fetch("books.json")
    let books = await response.json()
    let n = 0
    return books.map(book => {
        n++
        return {...book, id: n}
    })
}

function bookHtml(book) {
    return `
        <div class="book">
            <div class="cover">${book.title}</div>
            <div class= "spine"></div>
            <div class="footer"></div>
        </div>
    `
}

function displayLibrary() {
    getBooks().then(books => {
        document.getElementById("library").innerHTML = books.map(book => bookHtml(book)  ).join("")
    }).catch(function(err) {
        if (err) {
            console.log(err)
        }
    })
}

displayLibrary()