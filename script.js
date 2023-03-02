const exampleList = ["apples", "pears", "oranges"];
const ul = document.createElement("ul");
document.body.append(ul);
for (i = 0; i < exampleList.length; i++) {
  const li = document.createElement("li");
  ul.append(li);
  li.textContent = exampleList[i];
}
