import * as React from 'react';

const mainStyles = `
flex
flex-col
justify-center
items-center
gap-[6vh]
`;

interface IMainProps {
  children?: React.ReactElement;
}

export class Main extends React.Component<IMainProps> {
  render() {
    const { children } = this.props;
    return <main className={`${mainStyles}`}>{children}</main>;
  }
}
