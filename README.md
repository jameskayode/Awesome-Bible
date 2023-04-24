# Awesome-Bible
* I want to begin by designing an homepage such that when on launching the application,  a random scripture displayed on the page.
* to achieve the step above, i will create an HTML homepage file, which will a div container that houses the bible text displaying randomly with a set interval which will be styled and the js function will be added ("home.js")
* at the home.js;    i fetch the random verses and the corresponding references from the random.json file
*  I define a function called "displayRandomVerse" which when called selects a random verse from the data object, and displays it on the page using math.random() function.
*  i also added the setInterval function, it is used to call the displayRandomVerse function every one minute, so that the displayed verse will change automatically over time.
* And alongside the verse container i will have a READ button when it's clicked takes us to the main page
* this is done by adding an event listener to the button with the ID "read-btn". in Which when this button is clicked, the code will redirect the user to a page named "main.html".


* At the main page, i will have a styled UL tags which will house the new old testament and another with new testament which will also each have LI tags container the books (Genesis, Exodus) which will be arranged alphabetically
* the LI buttons will have an action button which when clicked on displays the chapters which will be 10 each..
* when a chapter is clicked on it takes us a new page containing 20 verses which will be fetched from a local JSON file. 
