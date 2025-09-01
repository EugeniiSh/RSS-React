import * as React from 'react';

interface IHeaderProps {
  children: React.ReactElement;
}

export class Header extends React.Component<IHeaderProps> {
  render(): React.ReactNode {
    const { children } = this.props;

    return <header>{children}</header>;
  }
}
