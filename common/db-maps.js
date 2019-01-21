const match = (str, regex) => (typeof str === 'string' && str.trim().match(regex));

const regexMap = {
  'user_login': '^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*){1,50}$',
  'firstname': '^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*){1,50}$',
  'lastname': '^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*){1,50}$',
  'gender': '^(male|female|other)$',
  'user_email': '^[A-Za-z0-9._%-+!#$&/=?^|~]+@[A-Za-z0-9.-]+[.][A-Za-z]+$',
  'user_password': '^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d]{8,50}$'
};
// be careful we forgot to escape the 'd' in pwd regex
const formNorms = {
  'firstname': 'presence of bad characters, only \',. and white spaces',
  'lastname': 'presence of bad characters, only \',. and white spaces',
  'user_login': 'presence of bad characters, only \',. and white spaces',
  'dob': 'You must be minimum 18 to subscribe',
  'gender': 'please juste say \'other\'...',
  'user_email': 'Invalid format',
  'user_password': 'minimum 8 characters, CAPiTAL LETTERS, the little ones and numbers'
}

const dbKeys = {
  'user_info': [
    'firstname',
    'lastname',
    'dob',
    'gender',
    'bio',
    'created',
    'images'
  ],

  'user_auth': [
    'user_email',
    'user_login',
    'user_password',
    'token_mail',
    'token_pwd',
    'confirmed'
  ],

  'user_preferences': [
    'interested_by',
    'list_of_interests',
    'age_max',
    'age_min',
    'distance_max'
  ],

  'login_log': [],

  'logout_log': [],

  'match_log': [],

  'like_log': [],

  'block_log': [],

  'display_log': [],

  'location_log': [],

  'rooms': [],

  'interests': []
};

/**
 * nameMaps
 *
 * Maps possible value names in requests to the actual
 * names for these values in the database
 *
 * Organised by tables
 *
 * e.g.
 * Usecase :
 *
 * While manipulating the table 'user_auth'
 * with a request body = { login: 'foo' }
 * you can get the actual name for 'login' in the db :
 *  let dbName = nameMaps['user_auth']['login'];
 *
 * Author : Pamicel
 */
const nameMaps = {
  'user_auth': {
    // user_login
    'user_login': 'user_login',
    'login': 'user_login',
    // user_email
    'user_email': 'user_email',
    'email': 'user_email',
    // user_password
    'user_password': 'user_password',
    'pwd': 'user_password',
    'password': 'user_password'
  },

  'user_info': {
    // dob
    'dob': 'dob',
    'birthDate': 'dob',
    // images
    'images': 'images',
    'pictures': 'images'
  }
};

module.exports = {
  formNorms,
  dbKeys,
  nameMaps,
  dbKey (table, key) {
    if (!nameMaps[table]) return (undefined);
    return (nameMaps[table][key]);
  },

  regexMap,
  isLegal (key, val) {
    if (key === undefined) throw (new Error('Missing argument key'));
    if (val === undefined) throw (new Error('Missing argument val'));
    const validators = {
      'user_login': (val) => (val.length <= 50 && match(val, regexMap['user_login'])),
      'firstname': (val) => (val.length <= 50 && match(val, regexMap['firstname'])),
      'lastname': (val) => (val.length <= 50 && match(val, regexMap['lastname'])),
      'gender': (val) => (match(val, regexMap['gender'])),
      'user_password': (val) => (match(val, regexMap['user_password'])),
      'user_email': (val) => (match(val, regexMap['user_email']))
    };
    if (!validators[key]) return (false);
    return (validators[key](val));
  }
};
