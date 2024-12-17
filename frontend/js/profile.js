
// Add functionality to icons in quotes
document.querySelectorAll('.quote-box').forEach(box => {
    const heartIcon = box.querySelector('.heart-icon img');
    const copyIcon = box.querySelector('.copy-icon img');
    const likeIcon = box.querySelector('.like-icon img');
    const likeCounter = document.createElement('span');
    let likeCount = 0;

    // Like functionality
    likeIcon.addEventListener('click', () => {
        likeCount++;
        likeCounter.textContent = ` ${likeCount}`;
        likeIcon.parentNode.appendChild(likeCounter); // Add counter next to icon
    });

    // Heart toggle functionality
    heartIcon.addEventListener('click', () => {
        heartIcon.src = heartIcon.src.includes('heart-thin-icon') 
            ? 'images/heart-icon 1.png' // Change to filled heart
            : 'images/heart-thin-icon 1.png'; // Change back to empty heart
    });

    // Copy quote functionality
    copyIcon.addEventListener('click', () => {
        const quoteText = box.querySelector('.quote-text').textContent;
        navigator.clipboard.writeText(quoteText)
            .then(() => alert('Quote copied to clipboard!'))
            .catch(() => alert('Failed to copy quote.'));
    });
});

