import { LOAD } from './type.js';

const loadData = payload => ({ type: LOAD, payload });

export default { loadData };
