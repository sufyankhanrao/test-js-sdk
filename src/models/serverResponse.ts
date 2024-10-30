/**
 * Json Value TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  dict,
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';

export interface ServerResponse {
  passed: boolean;
  message?: string;
  input?: Record<string, Record<string, unknown>>;
  nullableNumberMap?: Record<string, number | null>;
  nullableNumberArray?: (number | null)[];
  [key: string]: unknown;
}

export const serverResponseSchema: Schema<ServerResponse> = expandoObject({
  passed: ['passed', boolean()],
  message: ['Message', optional(string())],
  input: ['input', optional(dict(dict(unknown())))],
  nullableNumberMap: ['nullableNumberMap', optional(dict(nullable(number())))],
  nullableNumberArray: [
    'nullableNumberArray',
    optional(array(nullable(number()))),
  ],
});
