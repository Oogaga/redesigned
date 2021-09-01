
export class RegExpData {
  static PASSWORD_VALIDATOR = '^[A-Za-z0-9 !?@#$%^&_+*=\\-.,:;~(){}\\[\\]«»]{6,18}$';
  static PASSWORD_ENTERED_VALIDATOR = '^.{3,15}$';
  static MIN_LENGTH_PASSWORD = 6;
  static EMAIL_VALIDATOR = '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
  static EMAIL_ENTERED_VALIDATOR = '^.{3,40}$';
  static NAME_VALIDATOR = '^[a-zA-Zа-яА-ЯёЁ]{2,25}$';
  static SURNAME_VALIDATOR = '^[a-zA-Zа-яА-ЯёЁ]{3,35}$';
  static PHONE_VALIDATOR_1 = '^\\+*\\s*\\d*\s*\\(?\\s*\\d*\s*\\)?\s*[\\d\-\\s]*$';
  static PHONE_VALIDATOR_2 = '(\\d{1}[^\\d]*){9,15}';
  static PHONE_VALIDATOR_3 = '^[0-9()+-]{10,20}$';
  static DATE_FORMAT = 'YYYY-MM-DD';
  static DEVICE_ID = '^[\\dA-Fa-f]{24}$';
}
