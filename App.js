import { SafeAreaView} from 'react-native'
import React from 'react'
import Header from './src/component/header'
import List from './src/component/List'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { reducer } from './src/component/api/redux/reducers'


function App() {

  const store = createStore(reducer, applyMiddleware(thunk))

  return (
     <Provider store={store}>
       <SafeAreaView>
         <Header/>
         <List/>
       </SafeAreaView>
      </Provider>
    )
  }

export default App