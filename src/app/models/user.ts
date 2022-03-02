export interface RegisterUserModel {
  username?: string;
  email: string;
  password: string;
  countrycode?: string;
  isinstructor?: boolean;
}

export interface LoginUserModel {
  email: string;
  password: string;
}
