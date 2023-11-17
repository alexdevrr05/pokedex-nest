import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

import { PokemonResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany({}); // = delete * from pokemons

    const { data } = await this.axios.get<PokemonResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    const pokemonToInsert: { no: number; name: string }[] = [];

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const noPokemon: number = +segments[segments.length - 2];

      pokemonToInsert.push({ no: noPokemon, name });
    });

    this.pokemonModel.insertMany(pokemonToInsert);

    return 'Seed executed';
  }
}
