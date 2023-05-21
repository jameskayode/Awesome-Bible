//Toggling between the two buttons........

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


//sorting the books in the bible........
function sortList(ul) {
  const liArray = Array.from(ul.querySelectorAll('li'));
  const sortedArray = liArray.sort((a, b) => a.textContent.localeCompare(b.textContent));
  ul.innerHTML = '';
  sortedArray.forEach(li => ul.appendChild(li));
}


// Get the chapters and verses containers
const chaptersContainer = document.querySelector('#chapters-container');
const versesContainer = document.querySelector('#verses-container');

// Display the first 10 chapters
fetch('newVersion.json')
  .then(response => response.json())
  .then(data => {
    const book = data.books[0];
    const chapterList = document.createElement('ul');
    chapterList.className = 'chapter-list';
    book.chapters.slice(0, 10).forEach(chapter => {
      const chapterListItem = document.createElement('li');
      const chapterLink = document.createElement('a');
      chapterLink.href = '#';
      chapterLink.textContent = `Chapter ${chapter.number}`;
      chapterLink.addEventListener('click', function(event) {
        event.preventDefault();
        displayVerses(chapter);
      });
      chapterListItem.appendChild(chapterLink);
      chapterList.appendChild(chapterListItem);
    });
    chaptersContainer.appendChild(chapterList);
  })
  .catch(error => {
    console.error(error);
  });

// Function to display verses for a selected chapter
function displayVerses(chapter) {
  // fetch newVersion.json file
	fetch('newVersion.json')
    .then(response => response.json())
    .then(data => {
      const verseList = document.createElement('ul');
      verseList.className = 'verse-list';
      chapter.verses.forEach(verse => {
        const verseListItem = document.createElement('li');
        const referenceSpan = document.createElement('span');
        referenceSpan.className = 'reference';
        referenceSpan.textContent = `${chapter.number}:${verse.number}`;
        const textSpan = document.createElement('span');
        textSpan.className = 'text';
        textSpan.textContent = `${verse.text}`;
        verseListItem.appendChild(referenceSpan);
        verseListItem.appendChild(textSpan);
        verseList.appendChild(verseListItem);
      });
      
      versesContainer.innerHTML = '';
      versesContainer.appendChild(verseList);
    })
    .catch(error => {
      console.error(error);
    });
}

  

//modal dialog with the verse list 

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
