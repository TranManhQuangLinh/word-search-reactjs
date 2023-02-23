import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import styles from './components/Container/Container.module.css'
import { BrowserRouter } from 'react-router-dom';
import { createContext, useState } from 'react';

export const Context = createContext()
function App() {
  const [type, setTypeState] = useState('dong nghia')
  const [word, setWordState] = useState('')
  const [resultList, setResultListState] = useState([])
  const [searchCheck, setSearchCheckState] = useState(false)
  const [loadingIcon, setLoadingIconState] = useState(<div id={styles.loading_icon} bis_skin_checked="1"></div>)
  const [loadingText, setLoadingTextState] = useState(<div id={styles.loading_text} bis_skin_checked="1"></div>)
  const [infoText, setInfoTextState] = useState(<p>Type any existing word and press enter to get meaning, example, synonyms, etc.</p>)
  

  
  return (
    <BrowserRouter>
      <Context.Provider value={
        {
          type: type,
          word: word,
          searchCheck: searchCheck,
          loadingIcon: loadingIcon,
          loadingText: loadingText,
          infoText: infoText,
          resultList: resultList,
          setType: type => setTypeState(type),
          setWord: word => setWordState(word),
          setSearchCheck: searchCheck => setSearchCheckState(searchCheck),
          setLoadingIcon: loadingIcon => setLoadingIconState(loadingIcon),
          setLoadingText: loadingText => setLoadingTextState(loadingText),
          setInfoText: infoText => setInfoTextState(infoText),
          setResultList: resultList => setResultListState(resultList)

        }
      }>
        <Header />
        <Container />
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
