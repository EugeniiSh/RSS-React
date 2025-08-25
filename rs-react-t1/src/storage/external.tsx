export interface IInitialData {
  name: string;
  url: string;
}

export interface IDetailedData {
  abilities: { ability: IInitialData }[];
  sprites: { front_default: string };
}

interface HttpResponse {
  data: IInitialData | IDetailedData | null;
  error:
    | {
        type: 'code';
        name: string;
        message: string;
      }
    | {
        type: 'response';
        status: number;
      }
    | null;
}

// type TErrorData = Error | { status: number } | unknown

class PokemonStorage {
  protected mainUrl: 'https://pokeapi.co/api/v2/pokemon/';

  constructor() {
    this.mainUrl = 'https://pokeapi.co/api/v2/pokemon/';
  }

  public async getPokemon(name: string = ''): Promise<HttpResponse> {
    try {
      if (name === '') {
        const response = await fetch(`${this.mainUrl}`);
        if (response.status !== 200) throw response.status;
        const resData: IInitialData = await response.json();
        return {
          data: resData,
          error: null,
        };
      }

      const response = await fetch(`${this.mainUrl}${name.trim()}`);
      if (response.status !== 200) throw response.status;

      // console.log('response =', response);

      const resData: IDetailedData = await response.json();
      return {
        data: resData,
        error: null,
      };
    } catch (error) {
      if (error instanceof Error) {
        console.log('The network request failed with an error.');
        console.log(error.name);
        console.log(error.message);
        return {
          data: null,
          error: {
            type: 'code',
            name: error.name,
            message: error.message,
          },
        };
      }

      console.log('Unsuccessful request. Status =', error);

      return {
        data: null,
        error: {
          type: 'response',
          status: 400,
        },
      };
    }
  }
}

const externalStorage = new PokemonStorage();
export { externalStorage };
