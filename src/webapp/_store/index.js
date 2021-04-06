import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {persistReducer,persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootReudcer } from 'webapp/_reducers'

const persistConfig = {
    key:'root',
    storage
}

const enhancedReducer = persistReducer(persistConfig,rootReudcer)

export const configureStore = ()=>{
    const store = createStore(enhancedReducer,composeWithDevTools())
    const persistor = persistStore(store)
    return {store,persistor}
}