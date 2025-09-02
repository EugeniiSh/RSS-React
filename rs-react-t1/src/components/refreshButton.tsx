import * as React from 'react';

import type { IErrorBoundaryState } from './errorBoundary';

const buttonStyles = `
px-3
shadow-md
border-green
border-1
rounded-full
text-green
cursor-pointer
transition-[background-color]
duration-300
first-letter:uppercase
hover:bg-green-100
`;

interface IRefreshButtonProps {
  children?: React.ReactElement;
  setEBState: (arg: IErrorBoundaryState) => void;
}

export class RefreshButton extends React.Component<IRefreshButtonProps> {
  render(): React.ReactNode {
    return (
      <button
        type="button"
        className={`${buttonStyles}`}
        onClick={() => this.props.setEBState({ hasError: false })}
      >
        refresh
      </button>
    );
  }
}
