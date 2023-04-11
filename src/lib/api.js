import { logout } from '../hooks/session';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';

class Api {
  #accessToken

  configure({ accessToken }) {
    this.#accessToken = accessToken;
  }

  login(username, password) {
    return this.#request('/auth/login', {
      method: 'POST',
      body: { username, password }
    });
  }

  register(email, password) {
    return this.#request('/auth/register', {
      method: 'POST',
      body: { email, password }
    });
  }

  #request(path, { method, body }) {
    const url = BASE_URL + path;

    const headers = {
      'Content-Type': 'application/json'
    };

    if (this.#accessToken) {
      headers.Authorization = this.#accessToken;
    }

    return fetch(
      url,
      {
        method,
        headers,
        body: JSON.stringify(body),
      }
    ).then(response =>
      response.text().then(responseText => {
        let responseJSON = null;

        try {
          responseJSON = JSON.parse(responseText);
        } catch (e) {}

        if (response.ok) {
          return responseJSON;
        } else {
          if (response.status === 401) logout();
          throw responseJSON;
        }
      })
    );
  }
}

export default window._api_client = new Api();
