import * as React from 'react';

const buttonStyles = `
self-end
px-3
shadow-md
border-red
border-1
rounded-full
text-red
cursor-pointer
transition-[background-color]
duration-300
first-letter:uppercase
hover:bg-red-100
`;

export class ErrorButton extends React.Component {
  state = { hasError: false };
  handlerClick = () => {
    this.setState({ hasError: true });
  };

  render(): React.ReactNode {
    if (this.state.hasError) {
      throw {
        name: 'Custom error',
        message: 'The error was caused manually.',
      };
    }

    return (
      <button
        type="button"
        className={`${buttonStyles}`}
        onClick={this.handlerClick}
      >
        cause an error
      </button>
    );
  }
}
