export const generateMatrix = (size: number) => {
    const random = () => Math.floor(Math.random() * 999) + 1;
    return Array.from({ length: size }, () =>
        Array.from({ length: size }, random),
    );
};
