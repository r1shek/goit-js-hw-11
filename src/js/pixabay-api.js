import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export async function fetchPixabayData(query) {
  try {
    const apiKey = '43748337-b5dbfef6f8220f61277bc8c0d';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
    const response = await fetch(url);
    if (!response.ok) {
      iziToast.error({
        title: 'Sorry',
        message:
          'There are no images matching your search query. Please try again!',
        position: 'topCenter',
      });
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error', error);
    return null;
  }
}
