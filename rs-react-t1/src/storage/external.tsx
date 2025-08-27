export interface IShortInfo {
  name: string;
  url: string;
}

export interface IDetailedInfo {
  name: string;
  abilities: { ability: IShortInfo }[];
  sprites: { front_default: string };
}

export interface IInitialData {
  results: IShortInfo[];
}

export interface IHttpResponse {
  data: IDetailedInfo[] | null;
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

class PokemonStorage {
  protected mainUrl: 'https://pokeapi.co/api/v2/pokemon/';

  constructor() {
    this.mainUrl = 'https://pokeapi.co/api/v2/pokemon/';
  }

  public async getPokemon(name: string = ''): Promise<IHttpResponse> {
    try {
      if (name === '') {
        const response1 = await fetch(`${this.mainUrl}`);
        if (response1.status !== 200) throw response1.status;
        const resData1: IInitialData = await response1.json();

        const response2 = await Promise.all(
          resData1.results.map((data) => fetch(data.url))
        );
        const resData2: IDetailedInfo[] = await Promise.all(
          response2.map((response) => {
            if (response.status !== 200) throw response.status;
            return response.json();
          })
        );

        return {
          data: resData2,
          error: null,
        };
      }

      const response = await fetch(`${this.mainUrl}${name.trim()}`);
      if (response.status !== 200) throw response.status;

      const resData: IDetailedInfo = await response.json();
      return {
        data: [resData],
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
