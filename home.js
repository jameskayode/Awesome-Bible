

// Fetch the JSON file
fetch('random.json')
  .then(response => response.json())
  .then(data => {
    // Define a function to display a random verse
    function displayRandomVerse() {
      // Get a random verse and reference from the JSON data
      const randomVerse = data.verses[Math.floor(Math.random() * data.verses.length)];
      const scriptureText = randomVerse.text;
      const scriptureReference = randomVerse.reference;

      // Display the scripture text and reference on the page
      const scriptureContainer = document.getElementById('verse-container');
      const scriptureDisplay = `${scriptureText} (${scriptureReference})`;
      scriptureContainer.innerHTML = scriptureDisplay;
    }

    // Call the displayRandomVerse() function initially to display a random verse
    displayRandomVerse();

    // Set a timer to update the displayed verse every 8 seconds
    setInterval(displayRandomVerse, 10000);
  })


// Add a click event listener to the read button to redirect to main page
const readBtn = document.getElementById("read-btn");
readBtn.addEventListener("click", function() {
  window.location.href = "main.html";
});
