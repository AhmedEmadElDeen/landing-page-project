# Landing Page Project
======================

[Udacity](https://www.udacity.com/)
![Udacity Logo](https://upload.wikimedia.org/wikipedia/commons/3/3b/Udacity_logo.png)




## Introduction

* This project is a process of turning a static landing webpage into a dynamically responsive and interactive webpage.

* This project was accomplished throught the power of:
    * HTML
    * CSS
    * Javascript, for the most part.

### Features

* All features are readily usable across all devices.
* Active sections have animated and distinctive styling.
* Multiple sections with the capacity to add an indefinite number of sections that will recieve the exact same styling.
* Dynamic and automatically updating naveigation menu that provides easy access to the sections' contents.


### Details

* 'index.html'
    * Used the startup code.
    * Linked the Javascript file.
    * Added two extra sections to the original file.

* 'style.css'
    * Added a class \"active-bar-item\" to highlight the selected navigation bar item
        ```CSS
        .active-bar-item {
            background-color: rgb(7, 69, 80);
        }
        ```

* 'app.js'
    * sections variable was defined to contain the value of all section elements and make them available globally.

    * navbar variable was created to store all navigation bar list items that were to be created.

    * an HTML fragment was used to hold the list items for better performance.

    * sections.forEach loop was used to build the nav by iterating over the 'sections' values to create new list items with corresponding links to each section respectively and later on adding them to the HTML fragment.

    * window.addEventListener was used to create an event listener to listen to active sections while scrolling through the page and apply styling to the active section. It also adds an active state to the navigation bar item when it's corresponding section is in the viewport and changes the navigation bar item style for proper indication of activity.


### Acknowledgments
    * https://www.udacity.com/
    * https://developer.mozilla.org/en-US/
    * https://stackoverflow.com/questions
    * https://www.w3schools.com/js/DEFAULT.asp
    * https://forum.squarespace.com/



**Ahmed Emad Ghodaia**
Udacity Web Development Professional Track Student