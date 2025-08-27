import * as React from 'react';
import { Card } from './card';

import type { IHttpResponse } from '../storage/external';

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

const noFoundStyles = `
text-center
first-letter:uppercase
`;

interface ICardListProps {
  children?: React.ReactElement;
  cardsData: IHttpResponse;
}

export class CardList extends React.Component<ICardListProps> {
  render() {
    const data = this.props.cardsData.data;
    let renderElements: React.JSX.Element | React.JSX.Element[];

    if (data === null) {
      renderElements = <li className={noFoundStyles}>nothing found</li>;
    } else {
      renderElements = data.map((pokeInfo) => {
        return <Card key={pokeInfo.name} info={pokeInfo}></Card>;
      });
    }

    return <ul className={`${cardListStyles} `}>{renderElements}</ul>;
  }
}
