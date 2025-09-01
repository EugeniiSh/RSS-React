import * as React from 'react';

import type { IDetailedInfo } from '../storage/external';

const cardLiStyles = `
flex
rounded-xl
bg-white
`;

const cardImgContainerStyles = `
flex
items-center
`;

const cardImgStyles = `
w-30
h-30
object-contain
`;

const cardDlStyles = `
flex
flex-col
grow
p-2
`;

const cardH3Styles = `
text-xl
font-bold
capitalize
`;

const cardDtStyles = `
mt-2
text-lg
text-gray-700
font-bold
capitalize
`;

interface ICardProps {
  children?: React.ReactElement;
  info: IDetailedInfo;
}

export class Card extends React.Component<ICardProps> {
  render() {
    const { name, abilities, sprites } = this.props.info;
    return (
      <li className={`${cardLiStyles}`}>
        <div className={`${cardImgContainerStyles}`}>
          <img
            className={`${cardImgStyles}`}
            src={sprites.front_default}
            alt={name}
          ></img>
        </div>
        <dl className={`${cardDlStyles}`}>
          <h3 className={`${cardH3Styles}`}>{name}</h3>
          <dt className={`${cardDtStyles}`}>abilities</dt>
          {abilities.map(({ ability }) => {
            return <dd key={ability.name}>{ability.name}</dd>;
          })}
        </dl>
      </li>
    );
  }
}
