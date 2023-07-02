import { useCallback } from 'react';
import { ControlOptions, ControlsType } from './Controls.types';
import './Controls.css';
import { Button } from '../Button';

export const Controls = ({ size, changeSize }: ControlsType) => {
    const handleButtonClick = useCallback(
        (option: ControlOptions) => {
            if (size > 0 && option === 'lower') changeSize(size - 1);
            if (option === 'higher') changeSize(size + 1);
        },
        [size, changeSize],
    );

    return (
        <div className="panel">
            <Button onClick={() => handleButtonClick('lower')}>-</Button>
            <span>{size}</span>
            <Button onClick={() => handleButtonClick('higher')}>+</Button>
        </div>
    );
};
