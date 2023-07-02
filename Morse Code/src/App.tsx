import { useState, useEffect, useRef, useCallback } from 'react';
import { MORSE_CODE } from './utils/morseCode';
import { Input } from './components/Input';

const THREE_SECONDS = 3 * 1000;
const SEVEN_SECONDS = 7 * 1000;

const MorseCodeApp = () => {
    const [message, setMessage] = useState('');
    const [morseCode, setMorseCode] = useState('');
    const pressTimeRef = useRef<number>(0);
    const letterTimeout = useRef<ReturnType<typeof setTimeout>>();
    const spaceTimeout = useRef<ReturnType<typeof setTimeout>>();

    const checkEvent = (event: MouseEvent | KeyboardEvent) => {
        const allowedKeys = ['Space', 'ArrowUp', 'ArrowDown'];
        if (['mousedown', 'mouseup'].includes(event.type)) return true;
        if (event instanceof KeyboardEvent && allowedKeys.includes(event?.code))
            return true;
        return false;
    };

    const handlePress = useCallback((event: MouseEvent | KeyboardEvent) => {
        if (!checkEvent(event)) return;
        clearTimeout(letterTimeout.current);
        clearTimeout(spaceTimeout.current);

        if (!pressTimeRef.current) pressTimeRef.current = new Date().getTime();
    }, []);

    const handleRelease = useCallback((event: MouseEvent | KeyboardEvent) => {
        if (!checkEvent(event)) return;
        const diff = new Date().getTime() - pressTimeRef.current;

        if (diff < THREE_SECONDS) {
            setMorseCode(v => v + '.');
        } else setMorseCode(v => v + '-');

        pressTimeRef.current = 0;
    }, []);

    useEffect(() => {
        if (morseCode) {
            letterTimeout.current = setTimeout(() => {
                console.log('LETTER TIMEOUT');

                const letter = MORSE_CODE[morseCode];
                if (letter) setMessage(v => v + letter);
                setMorseCode('');
            }, THREE_SECONDS);
        }
    }, [morseCode]);

    useEffect(() => {
        if (morseCode) {
            console.log('SPACE TIMEOUT');
            spaceTimeout.current = setTimeout(() => {
                setMessage(v => v + ' ');
                setMorseCode('');
            }, SEVEN_SECONDS);
        }
    }, [morseCode]);

    useEffect(() => {
        window.addEventListener('keydown', handlePress);
        window.addEventListener('mousedown', handlePress);
        window.addEventListener('keyup', handleRelease);
        window.addEventListener('mouseup', handleRelease);

        return () => {
            window.removeEventListener('keydown', handlePress);
            window.removeEventListener('mousedown', handlePress);
            window.removeEventListener('keyup', handleRelease);
            window.removeEventListener('mouseup', handleRelease);
        };
    }, [handlePress, handleRelease]);

    return (
        <div className="wrapper">
            <Input value={message} placeholder="Message" />
            <Input value={morseCode} placeholder="Morse code" />
        </div>
    );
};

export default MorseCodeApp;
