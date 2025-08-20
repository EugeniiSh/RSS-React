import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.tsx';
import { Header } from './components/header.tsx';
import { FormControl } from './components/formControl.tsx';
import { SearchInput } from './components/serchInput.tsx';
import { SearchButton } from './components/serchButton.tsx';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <App>
        <Header>
          <FormControl>
            <SearchInput></SearchInput>
            <SearchButton></SearchButton>
          </FormControl>
        </Header>
      </App>
    </StrictMode>
  );
}
