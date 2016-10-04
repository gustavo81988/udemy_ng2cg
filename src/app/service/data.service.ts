export class DataService {

  private data: string[] = [];

  public addData(input: string): void{
    this.data.push(input);
  }

  public getData(): string[]{
    return this.data;
  }

}
    