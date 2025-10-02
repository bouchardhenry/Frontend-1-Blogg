// Deklaration av variabler och selektorer

const titleInput = document.getElementById('titleInput');
const usernameInput = document.getElementById('usernameInput');
const messageInput = document.getElementById('messageInput');
const bloggSection = document.getElementById('bloggContainer');
const form = document.querySelector('.input-form');

// Event listener för formulärets submit-händelse

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = titleInput.value;
  const username = usernameInput.value;
  const message = messageInput.value;

// Undvik att skapa inlägg med tomma fält

if (!title.trim() || !username.trim() || !message.trim()) {
  alert('Vänligen fyll i alla fält!');
  return;
}

// Skapa nya div-element för inlägget

  const postCard = document.createElement('div')
  const postInfo = document.createElement('div')
  const dateAndTime = document.createElement('p')
  const date = new Date()
  const newtitlediv = document.createElement('div')
  const newusernamediv = document.createElement('div')
  const newmessagediv = document.createElement('div')
  const commentSection = document.createElement('div')
  const commentInput = document.createElement('textarea')
  const commentButton = document.createElement('button')


  form.reset();

// Lägg till klasser och innehåll

  postCard.classList.add('postCard')
  postInfo.classList.add('postInfo')
  newtitlediv.classList.add('titleDiv')
  newusernamediv.classList.add('usernameDiv')
  newmessagediv.classList.add('messageDiv')
  commentSection.classList.add('commentSection')
  commentInput.classList.add('commentInput')
  commentInput.placeholder = 'Skriv en kommentar...'
  commentButton.classList.add('commentButton')

  dateAndTime.textContent = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} • ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`
  newtitlediv.textContent = title
  newusernamediv.textContent = `Av: ${username} (Publicerat: ${dateAndTime.textContent})`
  newmessagediv.textContent = message
  commentButton.textContent = 'Kommentera'

  bloggSection.appendChild(postCard)
  postCard.appendChild(postInfo)
  postInfo.appendChild(newtitlediv)
  postInfo.appendChild(newusernamediv)
  postCard.appendChild(newmessagediv)
  postCard.appendChild(commentSection)
  commentSection.appendChild(commentInput)
  commentSection.appendChild(commentButton)

// Event listener för kommentarsknappen

  commentButton.addEventListener('click', (e) => {
  e.preventDefault();
  
  const commentText = commentInput.value;
  
  // kolla om kommentaren är tom
  if (!commentText.trim()) {
    return;
  }
  
  // Skapa ett nytt p-element för kommentaren
  const commentElement = document.createElement('p');
  commentElement.classList.add('commentText');
  commentElement.textContent = `${dateAndTime.textContent} Anonym kommentar: ${commentText}`;
  
  newmessagediv.appendChild(commentElement);
  commentInput.value = '';
});

// Skapa en sektion med olika "action" knappar

  const actionSection = document.createElement('div');
  actionSection.classList.add('actionSection');
  postCard.appendChild(actionSection);

// Skapa en "like" knapp med ikon

const likeButton = document.createElement('button');
const likeIcon = document.createElement('img');
likeIcon.src = './images/icons8-thumbs-up-64.png';
likeButton.classList.add('likeButton');
likeIcon.classList.add('likeIcon');
actionSection.appendChild(likeButton);
likeButton.appendChild(likeIcon);

let isLiked = false;
let likeCount = 0;

likeButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (!isLiked) {
    // lägg till like
    likeCount = 1;
    isLiked = true;

    const likeCountElement = document.createElement('p');
    likeCountElement.textContent = likeCount;
    likeCountElement.id = 'like-count';
    likeButton.appendChild(likeCountElement);
  } else {
    // ta bort like
    likeCount = 0;
    isLiked = false;

    const likeCountElement = likeButton.querySelector('#like-count');
    if (likeCountElement) {
      likeButton.removeChild(likeCountElement);
    }
  }
});

// Skapa en "dislike" knapp med ikon

const dislikeButton = document.createElement('button');
const dislikeIcon = document.createElement('img');
dislikeIcon.src = './images/icons8-thumbs-down-64.png';
dislikeButton.classList.add('likeButton');
dislikeIcon.classList.add('likeIcon');
actionSection.appendChild(dislikeButton);
dislikeButton.appendChild(dislikeIcon);

let isDisliked = false;
let dislikeCount = 0;

dislikeButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (!isDisliked) {
    // lägg till like
    dislikeCount = 1;
    isDisliked = true;

    const dislikeCountElement = document.createElement('p');
    dislikeCountElement.textContent = dislikeCount;
    dislikeCountElement.id = 'dislike-count';
    dislikeButton.appendChild(dislikeCountElement);
  } else {
    // ta bort like
    dislikeCount = 0;
    isDisliked = false;

    const dislikeCountElement = dislikeButton.querySelector('#dislike-count');
    if (dislikeCountElement) {
      dislikeButton.removeChild(dislikeCountElement);
    }
  }
});

// Delete knappen med ikon

  const deleteButton = document.createElement('button');
  const icon = document.createElement('img');
  icon.src = './images/icons8-trash-52.png';
  deleteButton.classList.add('deleteButton');
  icon.classList.add('trashIcon');
  actionSection.appendChild(deleteButton);
  deleteButton.appendChild(icon);

  deleteButton.addEventListener('click', (e)=> {
    e.preventDefault();
    bloggSection.removeChild(postCard);
  })
});
