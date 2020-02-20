import { INCREMENT, DECREMENT } from './type.js';

const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

export default { increment, decrement };
