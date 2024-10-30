/**
 * JsonValueTesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  dict,
  expandoObject,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';

export interface ValueContainer {
  name: string;
  id: string;
  value?: unknown;
  valueArray?: unknown[];
  valueMap?: Record<string, unknown>;
  [key: string]: unknown;
}

export const valueContainerSchema: Schema<ValueContainer> = expandoObject({
  name: ['name', string()],
  id: ['id', string()],
  value: ['value', optional(unknown())],
  valueArray: ['valueArray', optional(array(unknown()))],
  valueMap: ['valueMap', optional(dict(unknown()))],
});
