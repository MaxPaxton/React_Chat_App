import React from 'react';
import Layout from './components/Layouts' ;
import './index.css'
import SocketContext from './socket-context'
import * as io from 'socket.io-client'

const socket = io("http://192.168.0.16:4000")

const App = props => (
  <SocketContext.Provider value={socket}>
    <Layout  title="chatApp-Maxim Paxton and Patrick Murphy"
        extras="ids: 101064370 100000000" />
  </SocketContext.Provider>
)


export default App