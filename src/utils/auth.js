export const BASE_URL = 'http://localhost:8000';

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    // credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then((res) => getResponse(res))
    .then((data) => {
      if (data) {
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('userName', data.user.name);
        return data;
      }
    });
};

function getResponse(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
}
