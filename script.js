// Add event listeners to the navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
  });
});



// Add event listeners to the book CTAs
const bookCTAs = document.querySelectorAll('.book-cta');
bookCTAs.forEach(cta => {
  cta.addEventListener('click', (e) => {
    const card = cta.closest('.book-card');
    const page = card.getAttribute('data-page');
    if (page) {
      window.location.href = page;
    }
    e.stopPropagation();
  });
});
