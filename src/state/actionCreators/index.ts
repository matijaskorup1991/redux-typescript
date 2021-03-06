import axios from 'axios';
import { ActionType } from '../actionTypes/index';
import { Dispatch } from 'redux';
import { Action } from '../actions/index';

export const searchRepositories =
  (term: string) => async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SEARCH_REPOSITORIES });
    try {
      const { data } = await axios.get(
        `https://registry.npmjs.org/-/v1/search`,
        {
          params: {
            text: term,
          },
        }
      );

      const names = data.objects.map((res: any) => {
        return res.package.name;
      });

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
