# Awesome-Bible
* I want to begin by designing an homepage such that when on launching the application,  a random scripture displayed on the page.
* to achieve the step above, i will create an HTML homepage file, which will a div container that houses the bible text displaying randomly with a set interval which will be styled and the js function will be added ("home.js")
* at the home.js;    i fetch the random verses and the corresponding references from the random.json file
*  I define a function called "displayRandomVerse" which when called selects a random verse from the data object, and displays it on the page using math.random() function.
*  i also added the setInterval function, it is used to call the displayRandomVerse function every one minute, so that the displayed verse will change automatically over time.
* And alongside the verse container i will have a READ button when it's clicked takes us to the main page
* this is done by adding an event listener to the button with the ID "read-btn". in Which when this button is clicked, the code will redirect the user to a page named "main.html".


* At the main page, i have both old and new testament at the the top navbar which is simply used by using section Id.. the page also have a styled UL tags which will house the new old testament and another with new testament which will also each have LI tags container the books (Genesis, Exodus) which will be arranged alphabetically which can can be accessed by toggling between both the old and new testament buttons on the page.
* first the toggling is achieved by adding a click event listener to the buttons and when one of the the two buttons is clicked it toggles by simply using the "active" class attribute which has been set to display block in the css file.
* After thr toggle function i created the sortList function, that takes a single argument "ul", which is expected to help reference to an HTML unordered list (ul) element from the HTML, The function first creates an array of all list item (li) elements within the specified unordered list using the "querySelectorAll" method.  "sort" method, which compares the text content of each list item using the "localeCompare" method to determine the order. The sorted array is then used to replace the content of the original unordered list element.
* the rest of the code is to do the underlisted functions;
* the LI buttons will have an action button which when clicked on displays the chapters which will be 10 each..
* when a chapter is clicked on it takes us a new page containing 20 verses which will be fetched from a local JSON file. 
* to achieve this;
* i wrote two main blocks of functions
*  The first functionality uses a function to display the verses for a selected chapter, which is called when a chapter link is clicked.
*  Firstly, it displays the first 10 chapters of a book in a list format, where each chapter is a clickable link that, upon clicking, displays the verses of that chapter in another container. This is achieved by fetching data from a JSON file (named newVersion.json) that contains information about the book and its chapters and verses. 
*  The second functionality uses event listeners to trigger the display and closure of the modal box.
*   it implements a modal dialog box that appears when a trigger element is clicked. The modal box displays a list of verses and can be closed using a close button or by clicking outside the box.
*   the modal function is responsible for displaying the modal dialog box when a modal trigger element is clicked by setting the display style of the corresponding modal element to "block".
