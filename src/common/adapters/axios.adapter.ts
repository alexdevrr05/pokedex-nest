import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

import { HttpAdapter } from '../interfaces/httpp-adaptes.interface';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  readonly axios: AxiosInstance = axios;
  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axios.get(url);
      return data;
    } catch (error) {
      throw new Error('This is an erro - Check logs');
    }
  }
}
