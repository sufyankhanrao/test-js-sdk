/**
 * Json Value TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { ContentType, contentTypeSchema } from '../models/contentType';
import {
  SchemaContainer,
  schemaContainerSchema,
} from '../models/schemaContainer';
import { ServerResponse, serverResponseSchema } from '../models/serverResponse';
import { array, dict, number, optional, unknown } from '../schema';
import { BaseController } from './baseController';

export class JsonObjController extends BaseController {
  /**
   * Send Schema in Model
   *
   * @param body
   * @return Response from the API call
   */
  async sendSchemainModel(
    body: SchemaContainer,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ServerResponse>> {
    const req = this.createRequest('POST', '/body/sendSchemaInModel');
    const mapped = req.prepareArgs({ body: [body, schemaContainerSchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate(false);
    return req.callAsJson(serverResponseSchema, requestOptions);
  }

  /**
   * Send Schema as Body
   *
   * @param body
   * @return Response from the API call
   */
  async sendSchemaasBody(
    body: Record<string, unknown>,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ServerResponse>> {
    const req = this.createRequest('POST', '/body/sendSchema');
    const mapped = req.prepareArgs({ body: [body, dict(unknown())] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate(false);
    return req.callAsJson(serverResponseSchema, requestOptions);
  }

  /**
   * Send Schema as Form
   *
   * @param contentType
   * @param id
   * @param model
   * @param modelArray
   * @param modelMap
   * @return Response from the API call
   */
  async sendSchemaasForm(
    {
      contentType,
      id,
      model,
      modelArray,
      modelMap,
    }: {
      contentType: ContentType;
      id: number;
      model: Record<string, unknown>;
      modelArray?: Record<string, unknown>[];
      modelMap?: Record<string, Record<string, unknown>>;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ServerResponse>> {
    const req = this.createRequest('POST', '/form/sendSchema');
    const mapped = req.prepareArgs({
      contentType: [contentType, contentTypeSchema],
      id: [id, number()],
      model: [model, dict(unknown())],
      modelArray: [modelArray, optional(array(dict(unknown())))],
      modelMap: [modelMap, optional(dict(dict(unknown())))],
    });
    req.header('Content-Type', mapped.contentType);
    req.form({
      id: mapped.id,
      model: mapped.model,
      modelArray: mapped.modelArray,
      modelMap: mapped.modelMap,
    });
    req.authenticate(false);
    return req.callAsJson(serverResponseSchema, requestOptions);
  }

  /**
   * Send Schema as Query
   *
   * @param id
   * @param model
   * @param modelArray
   * @param modelMap
   * @return Response from the API call
   */
  async sendSchemaasQuery(
    {
      id,
      model,
      modelArray,
      modelMap,
    }: {
      id: number;
      model: Record<string, unknown>;
      modelArray?: Record<string, unknown>[];
      modelMap?: Record<string, Record<string, unknown>>;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ServerResponse>> {
    const req = this.createRequest('POST', '/query/sendSchema');
    const mapped = req.prepareArgs({
      id: [id, number()],
      model: [model, dict(unknown())],
      modelArray: [modelArray, optional(array(dict(unknown())))],
      modelMap: [modelMap, optional(dict(dict(unknown())))],
    });
    req.query('id', mapped.id);
    req.query('model', mapped.model);
    req.query('modelArray', mapped.modelArray);
    req.query('modelMap', mapped.modelMap);
    req.authenticate(false);
    return req.callAsJson(serverResponseSchema, requestOptions);
  }

  /**
   * Get Schema
   *
   * @return Response from the API call
   */
  async getSchema(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Record<string, unknown>>> {
    const req = this.createRequest('GET', '/response/getSchema');
    req.authenticate(false);
    return req.callAsJson(dict(unknown()), requestOptions);
  }

  /**
   * Get Schema Array
   *
   * @return Response from the API call
   */
  async getSchemaArray(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Record<string, unknown>[]>> {
    const req = this.createRequest('GET', '/response/getSchemaArray');
    req.authenticate(false);
    return req.callAsJson(array(dict(unknown())), requestOptions);
  }

  /**
   * Get Schema Map
   *
   * @return Response from the API call
   */
  async getSchemaMap(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Record<string, Record<string, unknown>>>> {
    const req = this.createRequest('GET', '/response/getSchemaMap');
    req.authenticate(false);
    return req.callAsJson(dict(dict(unknown())), requestOptions);
  }

  /**
   * Get Schema in Model
   *
   * @return Response from the API call
   */
  async getSchemainModel(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SchemaContainer>> {
    const req = this.createRequest('GET', '/response/getSchemaInModel');
    req.authenticate(false);
    return req.callAsJson(schemaContainerSchema, requestOptions);
  }
}
