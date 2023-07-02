import { useEffect, useState } from 'react';
import { Controls } from './components/Controls';
import { Matrix } from './components/Matrix/Matrix';
import { generateMatrix } from './utils/matrix';

function App() {
    const [size, setSize] = useState(3);
    const [matrix, setMatrix] = useState(generateMatrix(size));

    useEffect(() => {
        const newMatrix = generateMatrix(size);
        setMatrix(newMatrix);
    }, [size]);

    return (
        <>
            <Controls size={size} changeSize={setSize} />
            <Matrix matrix={matrix} setMatrix={setMatrix} />
        </>
    );
}

export default App;
