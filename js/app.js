// using query selector ALL to select all of the type I put in (li)
// changing style only here, to Hot Pink
let allPTags = document.querySelectorAll(`p`);
for(i=0;i<allPTags.length;i++){
    allPTags[i].style.color = `hotpink`;
}

// selector: elementsbyclassname & innerHTML add new content to a tag
// iterating through the class 'started' and adding(+=) some text via innerHTML
let booksStarted = document.getElementsByClassName(`started`);
for(i=0;i<booksStarted.length;i++){
    booksStarted[i].innerHTML += ` *This book has already been started!`
}

// selector: elementsbyId, adding a new nested tag using innerHTML
let readingGoal = document.getElementById(`readingGoal`);
// I turned my ID which was just an A tag, into an A tag with a H2 within
readingGoal.innerHTML = '<h2>2022 Reading Challenge Progress 28/50</h2>'

// using query selector to change the first IMG in my document
let firstImg = document.querySelector(`img`);
// changing first img to an img within a link using outerHTML
// (adding a new tag before an existing tag using outerHTML)
firstImg.outerHTML = `<a href="https://goodreads.com" target="_blank"><img src="https://images.unsplash.com/photo-1414124488080-0188dcbb8834?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" height="200px"></a>`

// changing a tag completely using outerHTML
// I changed the FIRST P tag to an IMG instead
let firstPTag = document.querySelector(`p`);
firstPTag.outerHTML = `<img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1419331811l/1081372.jpg" height="200px">`;

// adding new li to ID readingList
let readingList = document.getElementById(`readingList`);
// using insertadjacenthtml I chose beforeEnd (to insert as last child) and added my new LI 
readingList.insertAdjacentHTML(`beforeEnd`, `<li>Fairy Tale (Stephen King)</li>`);
