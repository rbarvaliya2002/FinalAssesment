// Get the reviews container
const reviewsContainer = document.querySelector('#reviewsCardContainer');

// sort the reviews by date (newest first)
window.reviewData.sort((a, b) => new Date(b.date) - new Date(a.date));
// Add event listener for the form submission
const addReviewForm = document.querySelector('#addReviewForm');
addReviewForm.addEventListener('submit', event => {
  event.preventDefault();

  // Get the values from the form
  const name = event.target.querySelector('#name').value;
  const rating = parseInt(event.target.querySelector('#rating').value);
  const review = event.target.querySelector('#review').value;
  const date = new Date().toLocaleDateString();

  // Create a new review object
  const newReview = {
    name: name,
    date: date,
    rating: rating,
    review: review
  };

  // Add the new review to the review data array
  window.reviewData.push(newReview);

  // Sort the reviews by date (newest first)
  window.reviewData.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Clear the reviews container
  reviewsContainer.innerHTML = '';

  // Generate the new review cards
  window.reviewData.forEach(review => {
    // Create a new review card
    const card = document.createElement('div');
    card.classList.add('card');

    // Add the name, date, rating, and review text to the card
    const name = document.createElement('h3');
    name.innerText = review.name;
    card.appendChild(name);

    const date = document.createElement('p');
    date.innerText = review.date;
    card.appendChild(date);

    const rating = document.createElement('p');
    rating.innerText = 'Rating: ' + '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
    card.appendChild(rating);

    const reviewText = document.createElement('p');
    reviewText.innerText = review.review;
    card.appendChild(reviewText);

    // Add the card to the reviews container
    reviewsContainer.appendChild(card);
  });

  // Reset the form
  addReviewForm.reset();
});

// Generate the initial review cards
window.reviewData.forEach(review => {
  // Create a new review card
  const card = document.createElement('div');
  card.classList.add('card');

  // Add the name, date, rating, and review text to the card
  const name = document.createElement('h3');
  name.innerText = review.name;
  card.appendChild(name);

  const date = document.createElement('p');
  date.innerText = review.date;
  card.appendChild(date);

  const rating = document.createElement('p');
  rating.innerText = 'Rating: ' + '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
  card.appendChild(rating);

  const reviewText = document.createElement('p');
  reviewText.innerText = review.review;
  card.appendChild(reviewText);

  // Add the card to the reviews container
  reviewsContainer.appendChild(card);
});

