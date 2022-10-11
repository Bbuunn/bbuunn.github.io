
// This dims a section(about & work)
//  when you hover over a hyperlink

// Variables
const sectionLink = document.querySelector("#section-link")
const overlay = document.querySelector("#overlay")

// To check if variable is working:
// console.log(workLink)

// Function
const changeDisplay = (value) => () => {
    overlay.style.display = value
}
// Alternative to above:
// function changeDisplay(value) {
//     overlay.style.display = value
// }

// block: displays #overlay div
sectionLink.addEventListener('mouseover', changeDisplay("block"))

// none: hides #overlay div
sectionLink.addEventListener('mouseout', changeDisplay("none"))

