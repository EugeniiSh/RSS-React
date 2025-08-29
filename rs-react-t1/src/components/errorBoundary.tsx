import * as React from 'react';
import { ErrorScreen } from './errorScreen';

export interface IErrorBoundaryProps {
  children: React.ReactElement;
}

export interface IErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log('An error occurred!');
    console.log('Error name =', error.name);
    console.log('Error message =', error.message);
    console.log('Error stack =', errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorScreen handlerRefresh={(arg) => this.setState(arg)}></ErrorScreen>
      );
    }

    return this.props.children;
  }
}
