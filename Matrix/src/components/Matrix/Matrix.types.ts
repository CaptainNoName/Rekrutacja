type Matrix = number[][];

export type RowType = number[];

export type MatrixType = {
    matrix: Matrix;
    setMatrix: (val: Matrix) => void;
};

export type ChangeProps = {
    row: number;
    col: number;
    e: React.ChangeEvent<HTMLInputElement>;
};
