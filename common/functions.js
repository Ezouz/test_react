const dbMaps = require('./db-maps');

export const majority = (date) => {
  const eighteen = 568080000000;
  let now = Date.now();
  let eighteenYearsFromNow = now - eighteen;
  
  if (date > eighteenYearsFromNow) {
    return false;
  }
  return true;
};
            
export function dateValue(key, date) {
  let errorList = {};

  if (date !== undefined) {
    if (majority(date.getTime()) === false) {
      errorList[key] = dbMaps.formNorms[key];
    }
  } else
      errorList[key] = "wrong value in field, format: YYYY-M-D";
    return errorList;
}

export function nameValues(key, value) {
  let errorList = {};

  if (key === 'login') {
    if (!dbMaps.isLegal('user_login', value))
      errorList[key] = dbMaps.formNorms['user_login'];
  } else {
    if (!dbMaps.isLegal(key, value))
      errorList[key] = dbMaps.formNorms[key];
  }
  return errorList;
}

export function emailValues(key, value) {
  let errorList = {};
  
  if (!dbMaps.isLegal('user_email', value))
    errorList[key] = dbMaps.formNorms['user_email'];
  return errorList;
}

  
export function checkGenericKeyValue(key, value) {
  let errorList = {};

  if (!dbMaps.isLegal(key, value))
    errorList[key] = dbMaps.formNorms[key];
  return errorList;
}

export const validator = {
  'login': nameValues,
  'firstname': nameValues,
  'lastname': nameValues,
  'email': emailValues,
  'dob': dateValue,
  'gender': checkGenericKeyValue,
  'password': checkGenericKeyValue
}