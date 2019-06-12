import {GlobalConfig} from '../global-config';

export class UsersConfig {
  get getUsersUrl(): string {
    return GlobalConfig.BASE_URL + '?action=user&method=getAll';
  }

  get addUsersUrl(): string {
    return GlobalConfig.BASE_URL + '?action=user&method=add';
  }

  get deleteUsersUrl(): string {
    return GlobalConfig.BASE_URL + '?action=user&method=del';
  }
}
