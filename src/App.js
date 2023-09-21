
import { useState } from 'react';
import styled from 'styled-components'
import GistList from './components/GistList';
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import './styles/styles.scss'

const App = () => {

  const [search, setSearch] = useState('')

  return (
    <Wrapper className="App" data-testid="app">
      <Header handleSearch={setSearch} />
      <GistList searchKey={search} />
      <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
