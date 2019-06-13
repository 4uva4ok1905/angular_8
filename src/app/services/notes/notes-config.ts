import {GlobalConfig} from '../global-config';

export class NotesConfig {

  get getTodoUrl(): string {
    return GlobalConfig.BASE_URL + '?action=todo&method=get';
  }

  get addTodoUrl(): string {
    return GlobalConfig.BASE_URL + '?action=todo&method=add';
  }
}
