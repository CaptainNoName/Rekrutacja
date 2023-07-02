type Matrix = number[][];

export type RowType = number[];

export type MatrixType = {
    matrix: Matrix;
    setMatrix: React.Dispatch<React.SetStateAction<Matrix>>;
};

export type ChangeProps = {
    row: number;
    col: number;
    e: React.ChangeEvent<HTMLInputElement>;
};
