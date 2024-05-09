export function clearGallery() {
  const gallery = document.querySelector('#gallery');
  gallery.innerHTML = '';
}

export function renderGallery(images) {
  clearGallery();
  const gallery = document.querySelector('#gallery');
  images.forEach(image => {
    const card = createImageCard(image);
    gallery.appendChild(card);
  });
}

function createImageCard(image) {
  const card = document.createElement('a');
  card.classList.add('image-card');
  card.href = image.largeImageURL;

  const img = document.createElement('img');
  img.src = image.webformatURL;
  img.alt = image.tags;

  const details = document.createElement('div');
  details.classList.add('details');

  const likes = document.createElement('p');
  likes.textContent = `Likes: ${image.likes}`;

  const views = document.createElement('p');
  views.textContent = `Views: ${image.views}`;

  const comments = document.createElement('p');
  comments.textContent = `Comments: ${image.comments}`;

  const downloads = document.createElement('p');
  downloads.textContent = `Downloads: ${image.downloads}`;

  details.appendChild(likes);
  details.appendChild(views);
  details.appendChild(comments);
  details.appendChild(downloads);

  card.appendChild(img);
  card.appendChild(details);

  return card;
}
