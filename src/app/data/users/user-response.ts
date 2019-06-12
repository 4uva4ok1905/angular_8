import {Users} from './users';

export class UserResponse {

  private pData: Array<Users>;
  private pStatus: string;
  private pErrors: string;

  constructor(data: Array<Users>, status, errors) {
    this.pData = data;
    this.pStatus = status;
    this.pErrors = errors;
  }

  get data(): Array<Users> {
    return this.pData;
  }

  set data(value: Array<Users>) {
    this.pData = value;
  }

  get status(): string {
    return this.pStatus;
  }

  set status(value: string) {
    this.pStatus = value;
  }

  get errors(): string {
    return this.pErrors;
  }

  set errors(value: string) {
    this.pErrors = value;
  }

  public static formJson(json: any): UserResponse {
    return new UserResponse(
      json.data.map(data => {
        return Users.formJson(data);
      }),
      json.status,
      json.errors
    );
  }
}
