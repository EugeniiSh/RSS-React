import * as React from 'react';

interface IMainProps {
  children?: React.ReactElement;
}

export class Main extends React.Component<IMainProps> {
  render() {
    const { children } = this.props;
    return <main>{children}</main>;
  }
}
