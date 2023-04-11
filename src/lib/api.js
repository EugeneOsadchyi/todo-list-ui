import { logout } from '../hooks/session';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:4000';

class Api {
  #accessToken

  configure({ accessToken }) {
    this.#accessToken = accessToken;
  }

  login({ email, password }) {
    return this.#request('/auth/login', {
      method: 'POST',
      body: { email, password }
    });
  }

  register({ name, email, password, passwordConfirmation }) {
    return this.#request('/auth/register', {
      method: 'POST',
      body: {
        name,
        email,
        password,
        passwordConfirmation
      }
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
