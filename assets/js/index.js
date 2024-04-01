const listItems = document.getElementsByTagName("li");

for (const index in listItems) {
  const listItem = listItems[index];
  const oldText = listItem.innerText;
  const newText = `<a href='#'>${oldText}</a>`;

  listItem.innerHTML = newText;
}
