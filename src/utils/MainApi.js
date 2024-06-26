import { BASE_URL } from "./constants";
import { apiInitialMovies } from "./constants";

class MainApi {
  constructor(url) {
    this._url = url;
  }

  _getResponse(res){
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //get userinfo from server
  loadUserInfo() {
    const token = localStorage.getItem('token');
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: `Bearer ${token}`,
      }
    })
    .then(this._getResponse);
  }

  //edit user profile on server
  editUserProfile(input) {
    const token = localStorage.getItem('token');
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: input.name,
        email: input.email
      })
    })
    .then(this._getResponse);
  }

  getMovies() {
    const token = localStorage.getItem('token');
    return fetch(`${this._url}/movies`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then(this._getResponse);
  }

  addNewMovie(input) {
    const imageUrl = `${apiInitialMovies}${input.image.url}`;
    const thumbnailUrl = `${apiInitialMovies}${input.image.formats.thumbnail.url}`;
    const token = localStorage.getItem('token');

    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        country: input.country,
        director: input.director,
        duration: input.duration,
        year: input.year,
        description: input.description,
        image: imageUrl,
        trailerLink: input.trailerLink,
        thumbnail: thumbnailUrl,
        movieId: input.id,
        nameRU: input.nameRU,
        nameEN: input.nameEN,
      })
    })
    .then(this._getResponse);
  }

  deleteMovie(id) {
    const token = localStorage.getItem('token');
    return fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then(this._getResponse);
  }
}

export const mainApi = new MainApi(BASE_URL);
