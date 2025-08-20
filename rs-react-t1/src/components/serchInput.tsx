import * as React from 'react';

const inputStyles = `
px-3
shadow-md
outline-gray
bg-white
border-transparent
border-1
rounded-full`;

export class SearchInput extends React.Component {
  render(): React.ReactNode {
    return (
      <input
        className={`${inputStyles} `}
        type="text"
        placeholder="search by name"
      ></input>
    );
  }
}
