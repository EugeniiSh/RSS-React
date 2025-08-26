import * as React from 'react';
import { externalStorage } from '../storage/external';
import { userStorage } from '../storage/local';

const formStyles = `  
flex
gap-2
max-sm:flex-col
`;

const inputStyles = `
px-3
shadow-md
outline-gray
bg-white
border-transparent
border-1
rounded-full`;

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

interface IFormControlProps {
  children?: React.ReactElement;
}

export class FormControl extends React.Component<IFormControlProps> {
  public state: { input: string };

  constructor(props: IFormControlProps) {
    super(props);
    this.state = { input: '' };
  }

  handlerInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    this.setState({ input: value });
  };

  handlerSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const request = this.state.input;
    const LS = userStorage.getStorage();

    if (LS[request]) {
      LS.last = request;
      userStorage.setStorage(LS);

      console.log('Обработка данных из LS', LS[request]);

      return;
    }

    const respons = await externalStorage.getPokemon(request);
    if (respons.data) {
      LS[request] = respons.data;
      LS.last = request;
      userStorage.setStorage(LS);

      console.log('Обработка данных из сетевого запроса', respons.data);

      return;
    }

    if (respons.error) {
      if (respons.error.type === 'response') {
        LS[request] = respons.error.status.toString();
        userStorage.setStorage(LS);

        console.log('Обработка не существующих данных', respons.data);
      }
    }
  };

  render(): React.ReactNode {
    return (
      <form className={`${formStyles} `} onSubmit={this.handlerSubmit}>
        <input
          className={`${inputStyles}`}
          type="text"
          placeholder="search by name"
          value={this.state.input}
          onChange={this.handlerInputChange}
        ></input>

        <button type="submit" className={`${buttonStyles} `}>
          search
        </button>
      </form>
    );
  }
}
