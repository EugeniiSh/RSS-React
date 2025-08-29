import * as React from 'react';
import { RefreshButton } from './refreshButton';
import type { IErrorBoundaryState } from './errorBoundary';

const errorScreenStyles = `
flex
flex-col
justify-start
items-center
gap-[6vh]
pt-[6vh]
w-screen
h-screen
bg-containerBg
font-medium
text-gray
`;

interface IErrorScreenProps {
  children?: React.ReactElement;
  handlerRefresh: (arg: IErrorBoundaryState) => void;
}

export class ErrorScreen extends React.Component<IErrorScreenProps> {
  render() {
    return (
      <div className={`error-screen ${errorScreenStyles}`}>
        <p>
          {
            'An error has occurred. To return to the application, click the "Refresh" button below.'
          }
        </p>
        <RefreshButton setEBState={this.props.handlerRefresh}></RefreshButton>
      </div>
    );
  }
}
