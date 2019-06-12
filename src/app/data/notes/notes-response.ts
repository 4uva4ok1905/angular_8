import {Notes} from './notes';

export class NotesResponse {

  private pData: Array<Notes>;
  private pStatus: string;
  private pErrors: string;

  constructor(data: Array<Notes>, status, errors) {
    this.pData = data;
    this.pStatus = status;
    this.pErrors = errors;
  }

  get data(): Array<Notes> {
    return this.pData;
  }

  set data(value: Array<Notes>) {
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

  public static formJson(json: any): NotesResponse {
    return new NotesResponse(
      json.data.map(data => {
        return Notes.formJson(data);
      }),
      json.status,
      json.errors
    );
  }
}
