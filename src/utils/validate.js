import validator from "validator";

function validateName(name) {
  name = validator.trim(name);
  if (validator.isEmpty(name)) {
    return ["Required", null];
  }
  if (!validator.isAlphanumeric(name, "en-GB", { ignore: " -" })) {
    return ["Characters must be letter or number", null];
  }
  if (!validator.isLength(name, { max: 25 })) {
    return ["Maximum number of characters is 25 ", null];
  }

  return [null, name];
}

function validatePassword(password) {
  password = validator.trim(password);
  if (validator.isEmpty(password)) {
    return ["Required", null];
  }

  return [null, password];
}

function validatePost(post) {
  post = validator.trim(post);
  if (!validator.isLength(post, { max: 1000 })) {
    return ["1000 character limit exceeded", null];
  }
  return [null, post];
}

function validateComment(comment) {
  comment = validator.trim(comment);
  if (validator.isEmpty(comment)) {
    return ["Required", null];
  }
  if (!validator.isLength(comment, { max: 300 })) {
    return ["300 character limit exceeded", null];
  }
  return [null, comment];
}

const validate = {
  validateName,
  validatePassword,
  validatePost,
  validateComment,
};

export default validate;
