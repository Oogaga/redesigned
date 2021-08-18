export class UsersAuthData {
  readonly email: string;
  readonly password: string;
  readonly phone: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly birthday: string;
  readonly locale?: string;

  constructor(email: string, password: string, phone: string, firstName: string, lastName: string, birthday: string, locale?: string) {
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.locale = locale;
  }
}
