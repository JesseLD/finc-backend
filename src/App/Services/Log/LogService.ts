interface IServiceResponse {
  message: string; // A message describing the result of the operation
  source: string; // The source of the log message

}

export class LogService {
  message: string;
  source: string;

  constructor({ message, source }: IServiceResponse) {
    this.message = message; // The message to log
    this.source = source; // The source of the log message
    this.log();

  }

  log(): void {

    const sec = new Date().getSeconds() > 9 ? new Date().getSeconds() : `0${new Date().getSeconds()}`;
    const min = new Date().getMinutes() > 9 ? new Date().getMinutes() : `0${new Date().getMinutes()}`;
    const hr = new Date().getHours() > 9 ? new Date().getHours() : `0${new Date().getHours()}`;

    const msg = `[${hr}:${min}:${sec} ${this.source.toUpperCase()}]: ${this.message}` // The formatted log message
    console.log(msg);
  }
}


