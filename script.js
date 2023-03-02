const exampleList1 = ["apples", "pears", "oranges"];
const ul = document.createElement("ul");
document.body.append(ul);
for (i = 0; i < exampleList1.length; i++) {
  const list = document.createElement("li");
  ul.append(list);
  list.textContent = exampleList1[i];
}

const exampleList2 = [
  { name: "bakyt", age: 18 },
  { name: "dosbol", age: 32 },
];
const ul1 = document.createElement("ul");
document.body.append(ul1);
for (i = 0; i < exampleList2.length; i++) {
  const list1 = document.createElement("li");
  ul1.append(list1);
  list1.textContent = exampleList2[i].name + " - " + exampleList2[i].age;
}
