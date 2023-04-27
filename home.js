


fetch('random.json')
  .then(response => response.json())
  .then(data => {
   
    function displayRandomVerse() {
    
      const randomVerse = data.verses[Math.floor(Math.random() * data.verses.length)];
      const scriptureText = randomVerse.text;
      const scriptureReference = randomVerse.reference;



     
      const scriptureContainer = document.getElementById('verse-container');
      const scriptureDisplay = `${scriptureText} (${scriptureReference})`;
      scriptureContainer.innerHTML = scriptureDisplay;
    }

    
    displayRandomVerse();

    // Set a timer to update the displayed verse every 1 min.
    setInterval(displayRandomVerse, 10000);
  })


// Add a click event listener to the read button to redirect to main page
const readBtn = document.getElementById("read-btn");
readBtn.addEventListener("click", function() {
  window.location.href = "main.html";
});
