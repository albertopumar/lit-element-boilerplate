import { INCREMENT, DECREMENT } from './type';

const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

export default { increment, decrement };
