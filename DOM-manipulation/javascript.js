const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// Red <p>
const redText = document.createElement("p");
redText.textContent = "hey, I'm red!";
redText.setAttribute("style", "color: red");

container.appendChild(redText);

// Blue H3 
const blueH3 = document.createElement("h3");
blueH3.textContent = "hey, im a blue h3!"
blueH3.setAttribute("style", "color: blue");

container.appendChild(blueH3)

// Div w black border and pink background color
const moreContent = document.createElement("div");
moreContent.setAttribute("style", "border: 2px solid black; background-color: pink; padding: 10px");

const moreContentChild = document.createElement("h1");
moreContentChild.textContent = "I'm a Div!";

const moreContentSibling = document.createElement("p");
moreContentSibling.textContent = "Me Too!"

moreContent.appendChild(moreContentChild);
moreContent.appendChild(moreContentSibling);
container.appendChild(moreContent);

//