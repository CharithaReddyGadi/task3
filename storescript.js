const books = [
    {
        id:1,
        title: "The Vines",
        author: "Shelley Nolden",
        cover: "image/fiction1.jpg",
        description: "The Vines a fictional novel by Shelley Nolden",
        genre: "fiction",
        price:"330"
    },
    {
        id:2,
        title: "The Hidden Hindu",
        author: "Akshat Gupta",
        cover: "image/fiction2.jpg",
        description: "The Hidden Hindu a fictional novel by Akshat Gupta",
        genre: "fiction",
        price:"240"
    },
    {
        id:3,
        title: "Harry Potter",
        author: "J.K.Rowling",
        cover: "image/fiction3.jpg",
        description: "Harry Potter a fictional novel by J.K.Rowling",
        genre: "fiction",
        price:"160"
    },
    {
        id:4,
        title: "A Beautiful Decay",
        author: "Karan Madhok",
        cover: "image/fiction4.jpg",
        description: "A Beautiful Decay a fictional novel by Karan Madhok",
        genre: "fiction",
        price:"310"
    },
    {
        id:5,
        title: "Ink and Bone",
        author: "Rachel Caine",
        cover: "image/fiction5.jpg",
        description: "The Hidden Hindu a fictional novel by Akshat Gupta",
        genre: "fiction",
        price:"220"
    },
    {
        id:6,
        title: "The Ocean At The End of The Lane",
        author: "Neil Gaiman",
        cover: "image/nonfiction3.jpg",
        description: "The Ocean At The End of The Lane is a non fiction novel by Neil Gaiman",
        genre: "nonfiction",
        price:"200"
    },
    {
        id:7,
        title: "The Golem And The Jinni",
        author: "Helene Wecker",
        cover: "image/nonfiction3.png",
        description: "The Golem And The Jinni is a non fiction novel by Helene Wecker",
        genre: "nonfiction",
        price:"199"
    },
    {
        id:8,
        title: "My Brillient Friend",
        author: "Elena Ferrante",
        cover: "image/gbook2.jpg",
        description: "My Brillient Friend is a non fiction novel by Elena Ferrante",
        genre: "nonfiction",
        price:"230.99"
    },
    {
        id:9,
        title: "A Monster Calls",
        author: "Patrick Ness",
        cover: "image/nonfiction4.jpg",
        description: "A Monster Calls is a non fiction novel by Patrick Ness ",
        genre: "nonfiction",
        price:"324"
    },
    {
        id:10,
        title: "passing",
        author: "Emaily Bernard",
        cover: "image/gbook4.jpg",
        description: "passing is a non fiction novel by ",
        genre: "nonfiction",
        price:"199.99"
    },
    {
        id:11,
        title: "The Mystery of Darkhill School",
        author: "C J Loughty",
        cover: "image/mystery1.jpg",
        description: "The Mystery of Darkhill School is a mystery novel by C J Loughty",
        genre: "mystery",
        price:"200"
    },
    {
        id:12,
        title: "The Handmaid's Tale",
        author: "Margaret Atwood",
        cover: "image/gbook1.jpg",
        description: "The Handmaid's Tale is a mystery novel by Margaret Atwood",
        genre: "mystery",
        price:"226.99"
    },
    {
        id:13,
        title: "Imaginary Friend",
        author: "Stephen Chobsky",
        cover: "image/mystery5.jpg",
        description: "Imaginary Friend is a mystery novel by Stephen Chobsky",
        genre: "mystery",
        price:"310"
    },
    {
        id:14,
        title: "The Shadow of The Wind",
        author: "Carlos Buiz Zafon",
        cover: "image/mystery3.png",
        description: "The Shadow of The Wind is a mystery novel by Carlos Buiz Zafon",
        genre: "mystery",
        price:"235.00"
    },
    {
        id:15,
        title: "Sherlock Homes",
        author: "Arthur Conan Doyle",
        cover: "image/mystery4.jpg",
        description: "Sherlock Homes is a mystery novel by Arthur Conan Doyle",
        genre: "mystery",
        price:"200.00"
    },
    {
        id:16,
        title: "Dragon Shift",
        author: "clarissa gossling",
        cover: "image/fantacy1.jpg",
        description: "Dragon Shift is a fantacy novel by clarissa gossling",
        genre: "fantasy",
        price:"180.00"
    },
    {
        id:17,
        title: "Warth of The Dragon",
        author: "Richard Fierce",
        cover: "image/fantacy2.jpg",
        description: "Warth of The Dragon is a fantacy novel by Richard Fierce",
        genre: "fantasy",
        price:"210.00"
    },
    {
        id:18,
        title: "The Wheel of Time",
        author: "Robert Jordan",
        cover: "image/fantacy3.jpg",
        description: "The Wheel of Time is a fantacy novel by Robert Jordan",
        genre: "fantasy",
        price:"200.00"
    },
    {
        id:19,
        title: "It Ends With Us",
        author: "Collen Hoover",
        cover: "image/romance1.jpg",
        description: "It Ends With Us is a romance novel by Collen Hoover",
        genre: "romance",
        price:"200.00"
    },
    {
        id:20,
        title: "It Starts With Us",
        author: "Collen Hoover",
        cover: "image/romance2.jpeg",
        description: "It Starts With Us is a romance novel by Collen Hoover",
        genre: "romance",
        price:"200.00"
    },
    {
        id:21,
        title: "Book Love",
        author: "Emaily Henry",
        cover: "image/tbook1.jpg",
        description: "Book Love is a fantacy novel by Emaily Henry",
        genre: "romance",
        price:"129.99"
    },
    {
        id:22,
        title: "The Love Hypothesis",
        author: "Ali Hazelwood",
        cover: "image/tbok3.jpg",
        description: "The Love Hypothesis is a fantacy novel by Ali Hazelwood",
        genre: "romance",
        price:"224.99"
    },
    {
        id:23,
        title: "Love Theoretically",
        author: "Ali Hazelwood",
        cover: "image/romance5.jpg",
        description: " Love Theoretically is a fantacy novel by Ali Hazelwood",
        genre: "romance",
        price:"210.00"
    },
    {
        id:24,
        title: "Horro of The Night",
        author: "Tom Coleman",
        cover: "image/horror1.jpg",
        description: "Horro of The Night is a fantacy novel by Tom Coleman",
        genre: "horror",
        price:"148.00"
    },
    {
        id:25,
        title: "Night of Terror",
        author: "D.Fischer",
        cover: "image/horror2.jpg",
        description: "Night of Terror is a fantacy novel by D.Fischer",
        genre: "horror",
        price:"200.00"
    },
    {
        id:26,
        title: "The Last House On Needless Street",
        author: "Stephen King",
        cover: "image/horror3.jpg",
        description: "The Last House On Needless Street is a fantacy novel by Stephen King",
        genre: "horror",
        price:"178.00"
    },
    {
        id:27,
        title: "Pet Semantary",
        author: "Stephen King",
        cover: "image/horror4.jpg",
        description: "Pet Semantary is a fantacy novel by Stephen King",
        genre: "horror",
        price:"311.00"
    },
    {
        id:28,
        title: "Haunting of Hill House",
        author: "Shirley Jackson",
        cover: "image/horror5.jpeg",
        description: "Haunting of Hill House is a fantacy novel by Shirley Jackson",
        genre: "horror",
        price:"220.00"
    }
    

    
];

document.addEventListener("DOMContentLoaded", () => {
    displayBooks(books);
});

function displayBooks(books) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    books.forEach((book, index) => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");
        bookElement.setAttribute('data-id', book.id);
        bookElement.setAttribute('data-title', book.title);
        bookElement.setAttribute('data-price', book.price);

        bookElement.innerHTML = `
            <img src="${book.cover}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>by ${book.author}</p>
            <p>${book.description}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;

        bookList.appendChild(bookElement);
    });
}

function addToCart(book) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === book.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...book, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

document.getElementById('bookList').addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        const bookElement = e.target.parentElement;
        const book = {
            id: bookElement.getAttribute('data-id'),
            title: bookElement.getAttribute('data-title'),
            price: parseFloat(bookElement.getAttribute('data-price')),
        };
        addToCart(book);
    }
});

function searchBooks() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredBooks = books.filter(book => {
        return book.title.toLowerCase().includes(searchInput) || book.author.toLowerCase().includes(searchInput);
    });
    displayBooks(filteredBooks);
}

function filterBooks() {
    const filteelect = document.getElementById("filteelect").value;
    const filteredBooks = filteelect === "all" ? books : books.filter(book => book.genre === filteelect);
    displayBooks(filteredBooks);
}
