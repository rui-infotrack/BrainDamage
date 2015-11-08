function ajax(url, data, type) {
  return $.ajax({
    url,
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    data: JSON.stringify(data),
    type
  });
}

export function post(url, data) {
  return ajax(url, data, 'POST');
};

export function put(url, data) {
  return ajax(url, data, 'PUT');
};
