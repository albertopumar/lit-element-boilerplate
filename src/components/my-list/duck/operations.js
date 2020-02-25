import actions from './actions';
import { getData } from './api';

const loadData = () => (dispatch) => {
  getData().then((res) => {
    dispatch(actions.loadData(res));
  });
};

export default { loadData };
