//вывести в список элементы из массива
const exampleList1 = ["apples", "pears", "oranges"];
const ul = document.createElement("ul");
document.body.prepend(ul);
for (i = 0; i < exampleList1.length; i++) {
  const list = document.createElement("li");
  ul.append(list);
  list.textContent = exampleList1[i];
}

////вывести в список элементы из объекта
const exampleList2 = [
  { name: "bakyt", age: 18 },
  { name: "dosbol", age: 32 },
];
const ul1 = document.createElement("ul");
document.body.prepend(ul1);
for (i = 0; i < exampleList2.length; i++) {
  const list1 = document.createElement("li");
  ul1.append(list1);
  list1.textContent = exampleList2[i].name + " - " + exampleList2[i].age;
}

// ФОРМЫЫЫ
const h1 = document.querySelector("h1");
document.querySelector("#display").addEventListener("input", function () {
  h1.textContent = this.value;
});

document.querySelector("#font-size").addEventListener("input", function () {
  h1.style.fontSize = this.value + "px";
});

document.querySelector("#text-color").addEventListener("input", function () {
  h1.style.color = this.value;
});

document.querySelector("#font-family").addEventListener("change", function () {
  h1.style.fontFamily = this.value;
});

document.querySelector("#text-bold").addEventListener("change", function () {
  if (this.checked) {
    h1.style.fontWeight = "bold";
  } else {
    h1.style.fontWeight = "normal";
  }
});

document.querySelector("#text-italic").addEventListener("change", function () {
  if (this.checked) {
    h1.style.fontStyle = "italic";
  } else {
    h1.style.fontStyle = "normal";
  }
});

document
  .querySelector("#text-underline")
  .addEventListener("change", function () {
    if (this.checked) {
      h1.style.textDecoration = "underline";
    } else {
      h1.style.textDecoration = "normal";
    }
  });
