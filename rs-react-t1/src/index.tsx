import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.tsx';
import { Header } from './components/header.tsx';
import { FormControl } from './components/formControl.tsx';
import { Main } from './components/main.tsx';
import { CardList } from './components/cardList.tsx';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <App>
        <Header>
          <FormControl></FormControl>
        </Header>
        <Main>
          <CardList></CardList>
        </Main>
      </App>
    </StrictMode>
  );
}
