import * as React from 'react';
import { Card } from './card';

import type { TAppState } from '../App';

const cardListStyles = `
flex
flex-col
gap-2
w-xs
max-h-[66vh]
p-2
shadow-md
rounded-xl
overflow-auto
max-sm:w-2xs
`;

const infoBolckStyles = `
text-center
first-letter:uppercase
`;

interface ICardListProps {
  children?: React.ReactElement;
  cardsData: TAppState;
}

export class CardList extends React.Component<ICardListProps> {
  render() {
    const dataState = this.props.cardsData;
    let renderElements: React.JSX.Element | React.JSX.Element[];
    let isBusy = false;

    switch (true) {
      case dataState.loading:
        renderElements = <li className={infoBolckStyles}>loading...</li>;
        isBusy = true;
        break;
      case dataState.data === null:
        renderElements = <li className={infoBolckStyles}>nothing found</li>;
        break;
      default:
        renderElements = dataState.data.map((pokeInfo) => {
          return <Card key={pokeInfo.name} info={pokeInfo}></Card>;
        });
    }

    return (
      <ul className={`${cardListStyles} `} aria-busy={isBusy}>
        {renderElements}
      </ul>
    );
  }
}
