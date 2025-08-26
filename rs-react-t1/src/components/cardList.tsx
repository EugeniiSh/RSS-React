import * as React from 'react';
import { Card } from './card';

const cardListStyles = `
flex
flex-col
gap-2
w-xs
max-h-[70vh]
p-2
shadow-md
rounded-xl
overflow-auto
max-sm:w-2xs
`;

export class CardList extends React.Component {
  render() {
    return (
      <ul className={`${cardListStyles} `}>
        {Array(3)
          .fill(0)
          .map((_, index) => {
            return <Card key={index}></Card>;
          })}
      </ul>
    );
  }
}
