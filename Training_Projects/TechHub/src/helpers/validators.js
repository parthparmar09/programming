export const validateEmail = (email) => {
  let message = "";

  if (!email) {
    message = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    message = "Invalid email address";
  }

  return message;
};

export const validatePassword = (password) => {
  let message = "";

  if (!password) {
    message = "Password is required";
  } else if (password.length < 6) {
    message = "Password must be at least 6 characters";
  } else if (password.length > 32) {
    message = "Password must be at most 32 characters";
  }

  return message;
};

export const validateName = (name) => {
  let message = "";
  if (!name) {
    message = "Name is required";
  } else if (name.length < 3) {
    message = "Name must be at least 3 characters";
  } else if (name.length > 32) {
    message = "Name must be at most 32 characters";
  } else if (!/^[a-zA-Z ]+$/.test(name)) {
    message = "Name can only contain letters and spaces";
  }

  return message;
};

export const validateUrl = (url) => {
  let message = "";
  if (!url) {
    message = "Url is required";
  } else if (
    !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*(\?.*)?$/.test(url)
  ) {
    message = "Invalid URL";
  }
  return message;
};
