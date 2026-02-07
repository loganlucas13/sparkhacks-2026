const getText = (text: string | (() => string)): string => {
    return typeof text === 'function' ? text() : text;
};

export default getText;
