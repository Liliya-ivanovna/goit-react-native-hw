export const loginValidator = (login) => {
  if (login) {
    return /^[A-Za-z0-9]+([A-Za-z0-9]*|[._-]?[A-Za-z0-9]+)*$/.test(login);
  }

  return false;
};

export const emailValidator = (email) => {
  if (email) {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  }

  return false;
};

export const passwordValidator = (password) => {
  if (password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  }

  return false;
};
