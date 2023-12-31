import { legacy_createStore } from 'redux';
import { rootReducer } from './reducers';
import { devToolsEnhancer } from '@redux-devtools/extension';

export const store = legacy_createStore(rootReducer, devToolsEnhancer());
