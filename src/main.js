import iziToast from 'izitoast';

import { fetchPixabayData } from './js/pixabay-api.js';

const form = document.querySelector('search-form');
const input = document.querySelector('searsh-input');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = input.value.trim();

  if ((query = '')) {
    iziToast.error({
      message: 'Please enter a search query',
      position: 'topCenter',
    });
  } else {
    const data = fetchPixabayData(query);
  }
});
