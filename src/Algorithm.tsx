class Field {
    // 1 - живые
    // 0 - мертвые
    N: number;
    M: number;
    cells: Array<Array<string>>;
    constructor() {
        this.N = 8;
        this.M = 8;
        this.cells = [];
        this.init();
    }
    init(): void {
        for (let i = 0; i < this.N; i++) {
            this.cells[i] = [];
            for (let j = 0; j < this.M; j++) {
                this.cells[i][j] = Math.round(Math.random()).toString();
            }
        }
        console.log(this.cells);
    }

    run(): void {
        for (let i = 0; i < this.N; i++) {
            for (let j = 0; j < this.M; j++) {
                let live = 0;
                for (let k = i - 1; k < i + 2; k++) {
                    for (let l = j - 1; l < j + 2; l++) {
                        if (k === i && l === j) continue;
                        if (this.cells[k] && this.cells[k][l] === "1") {
                            live++;
                        }
                    }
                }
                if (this.cells[i][j] === "0") {
                    if (live === 3) this.cells[i][j] = "-1";
                } else {
                    if (live < 2 || live > 3) this.cells[i][j] = "-1";
                }
            }
        }
        console.log(this.cells);
    }
}

export default Field;
