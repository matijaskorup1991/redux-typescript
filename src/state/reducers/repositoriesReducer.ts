import { ActionType } from '../actionTypes/index';
import { Action } from '../actions/index';
interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// interface Action {
//   type: string;
//   // ? moze sadrzavati a i ne mora
//   payload?: any;
// }

const initialState = {
  loading: false,
  error: null,
  data: [],
};

// uvijek vrati RepositoriesState
const reducer = (
  state: RepositoriesState = initialState,
  action: Action
  // | SearchRepositoriesAction
  // | SearchRepositoriesSuccessAction
  // | SearchRepositoriesErrorAction
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return {
        loading: true,
        error: null,
        data: [],
      };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };

    default:
      return state;
  }
};

export default reducer;
