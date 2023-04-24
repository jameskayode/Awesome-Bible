const isOldTestament = document.getElementById("old-testament");
const isNewTestament = document.getElementById("new-testament");

isOldTestament.addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("old").classList.toggle("active");
  document.getElementById("new").classList.remove("active");
});

isNewTestament.addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("new").classList.toggle("active");
  document.getElementById("old").classList.remove("active");
});

function sortList(ul) {
  const liArray = Array.from(ul.querySelectorAll('li'));
  const sortedArray = liArray.sort((a, b) => a.textContent.localeCompare(b.textContent));
  ul.innerHTML = '';
  sortedArray.forEach(li => ul.appendChild(li));
}


// Get all the book links
const bookLinks = document.querySelectorAll('#book-link');

// Get the chapters and verses containers
const chaptersContainer = document.querySelector('#chapters-container');
const versesContainer = document.querySelector('#verses-container');


// Loop through the book links and add an event listener to each
bookLinks.forEach(bookLink => {
  bookLink.addEventListener('click', e => {
    e.preventDefault();

    // Get the book name from the link's href
    const bookName = e.target.href.split('#')[1];

    // Fetch the Bible verses data from a JSON file
    fetch('sample.json')
      .then(response => response.json())
      .then(data => {

        // Filter the Bible verses data for the selected book
        const bookVerses = data.filter(verse => verse.book.toLowerCase() === bookName);

        // Create the chapters list
        const chaptersList = document.createElement('ul');
        chaptersList.className = 'chapters-list';

        // Loop through the book verses and get the chapter numbers
        const chapterNumbers = bookVerses.map(verse => verse.chapter);


        // Remove duplicates and sort the chapter numbers
        const uniqueChapterNumbers = [...new Set(chapterNumbers)];


          // Create the chapter list items and add them to the chapters list
          uniqueChapterNumbers.forEach(chapterNumber => {
          const chapterListItem = document.createElement('li');
          const chapterLink = document.createElement('a');
          chapterLink.href = `#${bookName}-chapter-${chapterNumber}`;
          chapterLink.textContent = `Chapter ${chapterNumber}`;
          chapterListItem.appendChild(chapterLink);
          chaptersList.appendChild(chapterListItem);
        });


        //  add the chapters list
        chaptersContainer.innerHTML = '';
        chaptersContainer.appendChild(chaptersList);
        versesContainer.innerHTML = '';
        

        // Add an event listener to each chapter link
        chaptersList.querySelectorAll('a').forEach(chapterLink => {
          chapterLink.addEventListener('click', e => {
            e.preventDefault();

            // Get the chapter number from the link's href
            const chapterNumber = parseInt(e.target.href.split(`#${bookName}-chapter-`)[1]);

            // Filter the book verses for the selected chapter
            const chapterVerses = bookVerses.filter(verse => verse.chapter === chapterNumber);

            // Create the verse list
            const verseList = document.createElement('ul');
            verseList.className = 'verse-list';

            // Loop through the chapter verses and create the verse list items
            chapterVerses.forEach(verse => {
              const verseListItem = document.createElement('li');
              const referenceSpan = document.createElement('span');
              referenceSpan.className = 'reference';
              referenceSpan.textContent = `${verse.chapter}:${verse.verse}`;
              const textSpan = document.createElement('span');
              
              textSpan.className = 'text';
              textSpan.textContent = verse.text;
              verseListItem.appendChild(referenceSpan);
              verseListItem.appendChild(textSpan);
              verseList.appendChild(verseListItem);
            });

            // Clear the verses container and add the verse list
            versesContainer.innerHTML = '';
            versesContainer.appendChild(verseList);
          });
        });
      })
     
      .catch(error => {
        console.error(error);
      });
  });
});



const modalTriggers = document.querySelectorAll('.modal-trigger');
		const modals = document.querySelectorAll('.modal');
		const modalCloseButtons = document.querySelectorAll('.modal-close');

		modalTriggers.forEach((trigger) => {
			trigger.addEventListener('click', () => {
				const target = trigger.getAttribute('data-modal-target');
				const modal = document.getElementById(target);
				modal.style.display = 'block';
			});
		});

		modalCloseButtons.forEach((button) => {
			button.addEventListener('click', () => {
				const modal = button.closest('.modal');
				modal.style.display = 'none';
			});
		});

		window.addEventListener('click', (event) => {
			modals.forEach((modal) => {
				if (event.target === modal) {modal.style.display = 'none';
      }
      });
      });
