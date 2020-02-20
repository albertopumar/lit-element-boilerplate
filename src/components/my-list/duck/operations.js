import actions from './actions.js';
import { getData } from './api.js';

const loadData = () => dispatch => {
  getData().then(res => {
    dispatch(actions.loadData(res));
  });
};

export default { loadData };
