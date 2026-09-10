const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function (event) {
  event.preventDefault();

  const chapter = input.value.trim();
  if (chapter === '') {
    alert("Please enter a chapter name.");
    input.focus();
    return;
  }

  if (list.children.length >= 10) {
    alert("You can only have 10 chapters in your Top 10 list.");
    input.focus();
    return;
  }

  const existing = Array.from(list.children).some(
    li => li.firstChild.textContent === chapter
  );
  if (existing) {
    alert("This chapter is already in your list.");
    input.focus();
    return;
  }

  const li = document.createElement('li');
  const deleteButton = document.createElement('button');

  li.textContent = chapter;
  deleteButton.textContent = '❌';
  deleteButton.setAttribute("aria-label", "Delete " + chapter);

  li.appendChild(deleteButton);
  list.appendChild(li);

  deleteButton.addEventListener('click', () => {
    list.removeChild(li);
    input.focus();
  });

  input.value = '';
  input.focus();
});


input.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    button.click(); // trigger the same logic as clicking the button
  }
});