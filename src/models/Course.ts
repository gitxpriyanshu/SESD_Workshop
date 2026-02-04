export class Course {
  private id: number;
  private name: string;
  private code: string;
  private credits: number;

  constructor(id: number, name: string, code: string, credits: number) {
    this.id = id;
    this.name = name;
    this.code = code;
    this.credits = credits;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getCode(): string {
    return this.code;
  }

  public getCredits(): number {
    return this.credits;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setCode(code: string): void {
    this.code = code;
  }

  public setCredits(credits: number): void {
    this.credits = credits;
  }

  public toJSON(): object {
    return {
      id: this.id,
      name: this.name,
      code: this.code,
      credits: this.credits
    };
  }
}
