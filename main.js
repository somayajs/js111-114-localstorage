const list = document.querySelectorAll("ul li");
const div = document.querySelector(".experiment");

let mainThemeColor = window.localStorage.color
if(mainThemeColor) { // Always look for the color in localstorge first to use it if exist
  list.forEach( li => li.classList.remove("active"));
  document.querySelector(`[data-color="${mainThemeColor}"]`).classList.add("active");
  div.style.backgroundColor = mainThemeColor
}
list.forEach(li => {
  li.addEventListener("click", (e) => {
    // Remove class active from all li elements when we click in any li
    list.forEach(li => li.classList.remove("active"));

    // add class active to the current clicked li
    e.currentTarget.classList.add("active");

    // set the new locaLstorge color
    let newColor = e.target.getAttribute("data-color");
    window.localStorage.color = newColor;
    div.style.backgroundColor = newColor;
  });
});


