import { ButtonType } from './Button.types';
import './Button.css';

export const Button = ({ children, ...props }: ButtonType) => {
    return (
        <button className="button" {...props}>
            {children}
        </button>
    );
};
