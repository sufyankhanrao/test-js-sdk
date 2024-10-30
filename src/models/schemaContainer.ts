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

export interface SchemaContainer {
  name: string;
  id: string;
  schema: Record<string, unknown>;
  schemaArray?: Record<string, unknown>[];
  schemaMap?: Record<string, Record<string, unknown>>;
  [key: string]: unknown;
}

export const schemaContainerSchema: Schema<SchemaContainer> = expandoObject({
  name: ['name', string()],
  id: ['id', string()],
  schema: ['schema', dict(unknown())],
  schemaArray: ['schemaArray', optional(array(dict(unknown())))],
  schemaMap: ['schemaMap', optional(dict(dict(unknown())))],
});
