import { InputTypes } from './Input.types';
import './Input.css';

export const Input = ({ ...props }: InputTypes) => {
    return <input type="text" className="input" maxLength={3} {...props} />;
};
