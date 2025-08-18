import useCount from './store.js';

export const Button = () => {
    const [count, setCount] = useCount();
    return (
        <button
            className='text-green-300'
            onClick={() => setCount(count + 1)}
        >
            Clicked {count} times
        </button>
    );
};

export default Button;