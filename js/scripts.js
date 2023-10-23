
function display(event) {
event.preventDefault();
// document.querySelector("form").style.display = "none";
const selections = document.querySelectorAll("input[name='item']:checked");
console.log(selections)
const selectionsArray = Array.from(selections);
selectionsArray.sort((a, b) => a.value.localeCompare(b.value));
console.log(selectionsArray);


let arrayUpper = [];
selectionsArray.forEach(function(selection) {
const value = selection.value.toUpperCase();
console.log(value);
arrayUpper.push(value);
});
;

  let arraySorted = arrayUpper.sort();
arraySorted.forEach(function(selection) {
  const p = document.createElement("p");
  p.append(selection.value);
  document.body.append(p);
  });
};



window.addEventListener("load", function() {
let form = document.querySelector("form")
form.addEventListener("submit", display)
});

