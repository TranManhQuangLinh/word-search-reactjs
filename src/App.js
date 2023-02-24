import './App.css';
import Header from './components/Header';
import Container from './components/Container';

import { BrowserRouter } from 'react-router-dom';
import { createContext, useState } from 'react';

export const Context = createContext()
function App() {
  const [type, setTypeState] = useState('dong nghia')
  const [word, setWordState] = useState('')
  const [resultList, setResultListState] = useState([])
  const [searchCheck, setSearchCheckState] = useState(false)
  const [loading, setLoadingState] = useState(false)
  const [infoText, setInfoTextState] = useState('Type any existing word\n and press enter to get meaning, example, synonyms, etc.')



  return (
    <BrowserRouter>
      <Context.Provider value={
        {
          type: type,
          word: word,
          searchCheck: searchCheck,
          loading: loading,
          infoText: infoText,
          resultList: resultList,
          setType: type => setTypeState(type),
          setWord: word => setWordState(word),
          setSearchCheck: searchCheck => setSearchCheckState(searchCheck),
          setLoading: loading => setLoadingState(loading),
          setInfoText: infoText => setInfoTextState(infoText),
          setResultList: resultList => setResultListState(resultList)

        }
      }>
        <div className='wrapper'>
          <div className='card'>
            <Header />
            <Container />
          </div>
        </div>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
