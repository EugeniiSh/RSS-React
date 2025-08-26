import * as React from 'react';

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

export class Card extends React.Component {
  render() {
    return (
      <li className={`${cardLiStyles}`}>
        <div className={`${cardImgContainerStyles}`}>
          <img
            className={`${cardImgStyles}`}
            src="./src/assets/react.svg"
            alt="card image"
          ></img>
        </div>
        <dl className={`${cardDlStyles}`}>
          <h3 className={`${cardH3Styles}`}>kukumber</h3>
          {Array(3)
            .fill(0)
            .map((_, index) => {
              return (
                <React.Fragment key={index}>
                  <dt className={`${cardDtStyles}`}>description termin</dt>
                  <dd>description details</dd>
                </React.Fragment>
              );
            })}
        </dl>
      </li>
    );
  }
}
