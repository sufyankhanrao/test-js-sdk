/**
 * JsonValueTesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ContentType
 */
export enum ContentType {
  EnumApplicationxwwwformurlencoded = 'application/x-www-form-urlencoded',
}

/**
 * Schema for ContentType
 */
export const contentTypeSchema: Schema<ContentType> = stringEnum(ContentType);
