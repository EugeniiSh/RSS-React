import * as React from 'react';
import { externalStorage } from '../storage/external';
import { userStorage } from '../storage/local';

import type { TAppState } from '../App';

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
  setAppState: (arg: TAppState) => void;
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
    const request = this.state.input.trim();
    const LS = userStorage.getStorage();

    if (LS.other[request]) {
      LS.last = request;
      userStorage.setStorage(LS);
      this.props.setAppState({
        data: LS.other[request],
        error: null,
        loading: false,
      });

      return;
    }

    this.props.setAppState({ data: null, error: null, loading: true });
    const respons = await externalStorage.getPokemon(request);
    if (respons.data) {
      LS.other[request] = respons.data;
      LS.last = request;
      userStorage.setStorage(LS);
      this.props.setAppState({ ...respons, loading: false });

      return;
    }

    if (respons.error) {
      if (respons.error.type === 'response') {
        LS.other[request] = respons.data;
        userStorage.setStorage(LS);
        this.props.setAppState({ ...respons, loading: false });
      }
    }
  };

  componentDidMount(): void {
    const storage = userStorage.getStorage();
    const lastRequest = storage.other[storage.last];

    if (lastRequest) {
      this.setState({ input: storage.last });
      this.props.setAppState({
        data: lastRequest,
        error: null,
        loading: false,
      });
      return;
    }

    this.props.setAppState({ data: null, error: null, loading: true });
    externalStorage.getPokemon('').then((res) => {
      storage.last = '';
      storage.other[storage.last] = res.data;
      userStorage.setStorage(storage);
      this.props.setAppState({ ...res, loading: false });
    });
  }

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
