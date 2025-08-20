import * as React from 'react';

interface IAppProps {
  children: React.ReactNode;
}

const appStyles = `  
flex
flex-col
items-center
w-screen 
h-screen
pt-20
bg-containerBg`;

export class App extends React.Component<IAppProps> {
  render(): React.ReactNode {
    const { children } = this.props;

    return <div className={`${appStyles} `}>{children}</div>;
  }
}
