const checkResponseStatus = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error stauts : ${res.status}`);
  }
};

export { checkResponseStatus };
