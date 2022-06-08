import {applyMiddleware, combineReducers, createStore} from 'redux'
import {todosReducer} from './TodoStore/TodoReducer'
import {FilterTodoReducer} from './FilterTodoStore/FilterTodoReducer'
import {composeWithDevTools} from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
    key: 'root',
    storage,
  }
   
const rootreducer = combineReducers({
        todos: todosReducer,
        filter: FilterTodoReducer,
    })
const persistedReducer = persistReducer(persistConfig, rootreducer)
const store = createStore(persistedReducer,
    composeWithDevTools(
        applyMiddleware(),
    )
)

const persistor = persistStore(store)

export  {persistor}
export default store
