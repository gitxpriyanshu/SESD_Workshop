export class Student {
  private id: number;
  private name: string;
  private email: string;
  private age: number;

  constructor(id: number, name: string, email: string, age: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.age = age;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getAge(): number {
    return this.age;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public setAge(age: number): void {
    this.age = age;
  }

  public toJSON(): object {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      age: this.age
    };
  }
}
