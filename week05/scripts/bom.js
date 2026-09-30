const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

// Load existing chapters or start fresh
let chaptersArray = getChapterList() || [];

// Display stored chapters on page load
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

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

  displayList(chapter);             // show in DOM
  chaptersArray.push(chapter);      // add to array
  setChapterList();                 // save to localStorage

  input.value = '';
  input.focus();
});

input.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    button.click();
  }
});

// --- Helper Functions ---

function displayList(item) {
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');

  li.textContent = item;
  deleteButton.textContent = '❌';
  deleteButton.setAttribute("aria-label", "Delete " + item);

  li.appendChild(deleteButton);
  list.appendChild(li);

  deleteButton.addEventListener('click', () => {
    list.removeChild(li);
    deleteChapter(item);
    input.focus();
  });
}

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}
