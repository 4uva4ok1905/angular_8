export class Config {
  private static BASE_URL = "http://pdfstep.zzz.com.ua";

  get getUsersUrl():string{
    return Config.BASE_URL +  '?action=user&method=getAll';
  }

  get addUsersUrl():string{
    return Config.BASE_URL +  '?action=user&method=add';
  }

  get deleteUsersUrl():string{
    return Config.BASE_URL +  '?action=user&method=delete';
  }
}
