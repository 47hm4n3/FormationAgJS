export class Todo {

    num: number;
    txt: string = '';
    faite: boolean = false;

    constructor(n:  number, t: string, f: boolean) {
        this.num = n;
        this.txt = t;
        this.faite = f;
      }


    public getNum(): number {
        return this.num;
    }
    public setNum(value: number) {
        this.num = value;
    }

    public getTxt(): string {
        return this.txt;
    }
    public setTxt(value: string) {
        this.txt = value;
    }

    public getFaite(): boolean {
        return this.faite;
    }
    public setFaite(value: boolean) {
        this.faite = value;
    }

}