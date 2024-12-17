let currentAuthorIndex = 0;
let currentBookIndex = 0;
const authors = [{ name: 'نجيب محفوظ', img: 'https://watanimg.elwatannews.com/image_archive/840x473/10978745261702287474.jpg' }, { name: 'اسم المؤلف', img: 'https://cdn.pixabay.com/photo/2024/07/12/20/14/flower-8891023_640.jpg' }, { name: 'اسم المؤلف', img: 'https://cdn.pixabay.com/photo/2024/07/12/20/14/flower-8891023_640.jpg' }];
const books = [{ name: 'The Handmaid\'s Tale', img: 'https://onegrandbooks.com/wp-content/uploads/2017/03/Handmaids-Tale-9780385490818.jpg' }, { name: 'Verity', img: 'https://a-static.mlcdn.com.br/800x560/livro-verity-edicao-de-colecionador/authenticlivros/1248772/f764860895c10d4f87990ed2bd018915.jpg' }, { name: 'Atomic Habits', img: 'https://cdn.feedingtrends.com/article-images/IMG_7128_f6a25823e9.jpeg' }];
function updateCarousel(carouselId, items, currentIndex) { const carousel = document.getElementById(carouselId); const carouselItems = carousel.querySelectorAll('.carousel-item'); carouselItems.forEach((item, index) => { const itemIndex = (currentIndex + index) % items.length; item.querySelector('img').src = items[itemIndex].img; item.querySelector('p').textContent = items[itemIndex].name; }); } function prevAuthor() {
    currentAuthorIndex = (currentAuthorIndex - 1 + authors.length) % authors.length;
    updateCarousel('authors-carousel', authors, currentAuthorIndex);
} function nextAuthor() { currentAuthorIndex = (currentAuthorIndex + 1) % authors.length; updateCarousel('authors-carousel', authors, currentAuthorIndex); } function updateBooksCarousel(bookcarouselId, items, currentIndex) { const carousel = document.getElementById('books-carousel'); const carouselItems = carousel.querySelectorAll('.book-item'); carouselItems.forEach((item, index) => { const itemIndex = (currentBookIndex + index) % books.length; item.querySelector('img').src = books[itemIndex].img; item.querySelector('p').textContent = books[itemIndex].name; }); } function prevBook() { currentBookIndex = (currentBookIndex - 1 + books.length) % books.length; updateBooksCarousel('books-carousel', books, currentBookIndex); } function nextBook() {
    currentBookIndex = (currentBookIndex + 1) % books.length; updateBooksCarousel('books-carousel', books, currentBookIndex);

} document.addEventListener('DOMContentLoaded', () => {
    updateCarousel('authors-carousel', authors, currentAuthorIndex);
    updateBooksCarousel('books-carousel', books, currentBookIndex);
});