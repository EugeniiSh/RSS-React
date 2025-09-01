import * as React from 'react';

const buttonStyles = `
px-3
shadow-md
border-blue
border-1
rounded-full
text-blue
capitalize
cursor-pointer
transition-[background-color]
duration-300
hover:bg-blue-100
`;

export class SearchButton extends React.Component {
  render(): React.ReactNode {
    return (
      <button type="submit" className={`${buttonStyles} `}>
        search
      </button>
    );
  }
}
