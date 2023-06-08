// Modal
//Select modal element
let modal = document.querySelector(".modal");

// Select contact page
let contactPage = document.querySelector(".contact-page");


// Show Contact Page
function showContactPage() {
  contactPage.classList.add("contact-page_show");
  modal.classList.add("modal-show");
}

//Close Contact Page on close-botton click
function closeContactPage() {
  contactPage.classList.remove("contact-page_show");
  modal.classList.remove("modal-show");
}
// When any part of the screen is clicked, Contact Page should be closed
window.onclick = function(event) {
  if (event.target == modal) {
    contactPage.classList.remove("contact-page_show");
    modal.classList.remove("modal-show");
  }
}


// Contact Form
// Recieve Contact Form Data before sending to database
const formName = document.getElementById("name");
const formEmail = document.getElementById("email");
const formDescription = document.getElementById("description");

const formSubmitBtn = document.getElementById("formBtn");

// console.log(typeof formName);

formSubmitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  
  let nameData = formName.value;
  formName.value = "";

  let emailData = formEmail.value;
  formEmail.value = "";

  let descriptionData = formDescription.value;
  formDescription.value = "";

  console.log(nameData);
  console.log(emailData);
  console.log(descriptionData);
});



// Artist search
const artistSearchInput = document.getElementById("search"); 
const artistSearchBtn = document.getElementById("btnSearch");
const artistContainer = document.querySelector(".main-artist_container");

// Add event listener to the search button
artistSearchBtn.addEventListener("click", function(event) {
  event.preventDefault();
  
  // Get the user's search query
  const searchQuery = artistSearchInput.value;

  // Perform API request to Last.fm
  // Replace 'API_KEY' with your actual Last.fm API key
  const apiUrl = 'https://api.last.fm/artist.search?api_key=a829efc237f7242b9c774bb8cbb965e0&artist=${encodeURIComponent(searchQuery)}';

  // fe

});



// .then(response => response.json())
// .then(data => {
//   displaySearchResults(data.results.artistsmatches.artist);
// })
// .catch(error => {
//   console.log('Error:', error);
// });