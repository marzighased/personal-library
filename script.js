function Book(title, author, genre, year, image = '', read = false) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.year = year;
    this.image = image;
    this.read = read;
    this.id = Date.now().toString();
}