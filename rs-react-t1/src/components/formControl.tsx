import * as React from 'react';

interface IFormControlProps {
  // children: React.ReactElement
  children: React.ReactNode;
}

const formStyles = `  
flex
gap-2
`;

export class FormControl extends React.Component<IFormControlProps> {
  render(): React.ReactNode {
    const { children } = this.props;

    return <form className={`${formStyles} `}>{children}</form>;
  }
}
