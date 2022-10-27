////////////////  Query Selector All ////////////////////

/* 
1. Given the boiler plate use query selector console log the following items on the page:​

    - The second p tag​
    - All of the list items​ with the class list
    - The text content of the third instance of the class “list”​
    - The length of the list.

*/

// Write your JavaScript below
paraTag = document.getElementsByTagName("p")[1];
console.log(paraTag);

listItem = document.getElementsByClassName("list");
console.log(listItem);

listItem3 = document.getElementsByClassName("list")[2].textContent;
console.log(listItem3);
console.log(listItem.length);
