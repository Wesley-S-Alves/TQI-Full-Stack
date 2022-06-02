import React from 'react'
import React from 'react-dom'
import  './styles.css'

const App = () => {
    return(
        <div className='App'>
            hello world
        </div>

    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)