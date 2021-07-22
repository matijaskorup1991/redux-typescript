import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

export const useActions = () => {
  const dispatch = useDispatch();

  //actionCreators je objekt koji sadrzi puno akcija
  return bindActionCreators(actionCreators, dispatch);
};
