const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateDatasetInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.dataset = !isEmpty(data.dataset) ? data.dataset : '';

  if (!Validator.isLength(data.name, {
      min: 2,
      max: 30
    })) {
    errors.name = "Name must be between 2 and 30 characters"
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name is required"
  }

  if (!Validator.isLength(data.dataset, {
      min: 2,
      max: 50
    })) {
    errors.dataset = "CPF/CNPJ must be between 11 and 14 characters"
  }

  if (Validator.isEmpty(data.dataset)) {
    errors.dataset = "CPF/CNPJ is required"
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}