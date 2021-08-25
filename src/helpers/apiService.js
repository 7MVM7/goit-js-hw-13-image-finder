import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

function getPictures(query, page) {
  return axios.get(`${query}&page=${page}&per_page=12&key=23035715-e0cb760b48ddc49b0eff80b6c`);
}

export default getPictures;
