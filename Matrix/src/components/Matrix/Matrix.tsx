import { useCallback } from 'react';
import { Input } from '../Input';
import './Matrix.css';
import { ChangeProps, MatrixType, RowType } from './Matrix.types';

export const Matrix = ({ matrix, setMatrix }: MatrixType) => {
    const calcSum = useCallback((row: RowType) => {
        return row.reduce((acc, curr) => acc + curr, 0);
    }, []);

    const handleCellChange = useCallback(
        ({ e, row, col }: ChangeProps) => {
            const value = Number(e.target.value);
            if (!isNaN(value)) {
                const newMatrix = [...matrix];
                newMatrix[row][col] = value;
                setMatrix(newMatrix);
            }
        },
        [matrix, setMatrix],
    );

    return (
        <div className="matrix">
            {matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((cell, colIndex) => (
                        <Input
                            key={colIndex}
                            value={cell}
                            onChange={e =>
                                handleCellChange({
                                    e,
                                    row: rowIndex,
                                    col: colIndex,
                                })
                            }
                            maxLength={3}
                        />
                    ))}
                    <div className="sum">{calcSum(row)}</div>
                </div>
            ))}
            <div>{calcSum(matrix.flat())}</div>
        </div>
    );
};
