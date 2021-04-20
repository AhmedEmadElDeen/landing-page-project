/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/


//storing all sections in a variable
const sections = document.querySelectorAll('section');

//creating a variable for storing the unordered list
const navbar = document.getElementById('navbar__list');

//creating an HTML fragment to hold the list items for better performance
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 *
*/


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

//iterating over the sections to create new list items with corresponding links to each section respectively and later on adding them to the HTML fragment
sections.forEach( (section)=> {
  let sectionName = section.getAttribute('data-nav');
  let linkAnchor = document.createElement('a');
  linkAnchor.classList.add('menu__link');
  let linkContent = document.createTextNode(sectionName);
  let newSection = document.createElement ('li');
  linkAnchor.appendChild(linkContent);
  newSection.appendChild(linkAnchor);

  linkAnchor.addEventListener('click', function scrollToSection () {
    section.scrollIntoView({behavior: "smooth"});
    });

  fragment.appendChild(newSection);

});

navbar.appendChild(fragment);



// Add class 'active' to section when near top of viewport


//creating an event listener to listen to active sections while scrolling through the page
window.addEventListener('scroll', function highlightActiveSection () {

  //iterating over sections to define which section is currently in the viewport
  for (section of sections) {
    const viewport = section.getBoundingClientRect();


    //making sure only the section in the viewport will recieve the active class
    section.classList.remove('your-active-class');

    //condtional to properly get the active section and it's corresponding link
    if (viewport.top>=0 && viewport.top <=300) {
      const currSectionLink = section.getAttribute('data-nav');
      section.classList.add('your-active-class');
      const navBarItem = document.querySelectorAll('a');

      //Adds an active state to the navigation bar items when a section is in the viewport.
      for (let i=0; i<navBarItem.length ; i++) {
          if(currSectionLink == navBarItem[i].innerText) {
            navBarItem[i].classList.add('active-bar-item');
        } else {
            navBarItem[i].classList.remove('active-bar-item');
        }
       }
    } else {
  section.classList.remove('your-active-class');
    }
  }
});


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
