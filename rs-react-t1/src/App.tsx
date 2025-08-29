import * as React from 'react';
import { Header } from './components/header.tsx';
import { FormControl } from './components/formControl.tsx';
import { Main } from './components/main.tsx';
import { CardList } from './components/cardList.tsx';
import { ErrorButton } from './components/errorButton.tsx';

import type { IHttpResponse } from './storage/external.tsx';

const appStyles = `  
flex
flex-col
gap-[6vh]
pt-[6vh]
items-center

w-screen
h-screen
bg-containerBg
`;

interface IAppProps {
  children?: React.ReactNode;
}

export type TAppState = IHttpResponse & { loading: boolean };

export class App extends React.Component<IAppProps, TAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = { data: null, error: null, loading: true };
  }

  render(): React.ReactNode {
    return (
      <div className={`app ${appStyles}`}>
        <Header>
          <FormControl setAppState={(arg) => this.setState(arg)}></FormControl>
        </Header>
        <Main>
          <>
            <CardList cardsData={this.state}></CardList>
            <ErrorButton></ErrorButton>
          </>
        </Main>
      </div>
    );
  }
}
