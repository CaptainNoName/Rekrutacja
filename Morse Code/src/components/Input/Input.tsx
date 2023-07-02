import { InputType } from './Input.types';
import './Input.css';

export const Input = ({ ...props }: InputType) => {
    return <input type="text" className="input" disabled {...props} />;
};
