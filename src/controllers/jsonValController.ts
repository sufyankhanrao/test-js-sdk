/**
 * JsonValueTesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { ContentType, contentTypeSchema } from '../models/contentType';
import { ServerResponse, serverResponseSchema } from '../models/serverResponse';
import { ValueContainer, valueContainerSchema } from '../models/valueContainer';
import { array, dict, number, optional, unknown } from '../schema';
import { BaseController } from './baseController';

export class JsonValController extends BaseController {
  /**
   * Send Value in Model
   *
   * @param body
   * @return Response from the API call
   */
  async sendValueinModel(
    body: ValueContainer,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ServerResponse>> {
    const req = this.createRequest('POST', '/body/sendValueInModel');
    const mapped = req.prepareArgs({ body: [body, valueContainerSchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate(false);
    return req.callAsJson(serverResponseSchema, requestOptions);
  }

  /**
   * Send Value as Body
   *
   * @param body
   * @return Response from the API call
   */
  async sendValueasBody(
    body: unknown,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ServerResponse>> {
    const req = this.createRequest('POST', '/body/sendValue');
    const mapped = req.prepareArgs({ body: [body, optional(unknown())] });
    req.header('Content-Type', 'text/plain');
    req.json(mapped.body);
    req.authenticate(false);
    return req.callAsJson(serverResponseSchema, requestOptions);
  }

  /**
   * Send Value as Form
   *
   * @param contentType
   * @param id
   * @param model
   * @param modelArray
   * @param modelMap
   * @return Response from the API call
   */
  async sendValueasForm(
    {
      contentType,
      id,
      model,
      modelArray,
      modelMap,
    }: {
      contentType: ContentType;
      id: number;
      model: unknown;
      modelArray?: unknown[];
      modelMap?: Record<string, unknown>;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ServerResponse>> {
    const req = this.createRequest('POST', '/form/sendValue');
    const mapped = req.prepareArgs({
      contentType: [contentType, contentTypeSchema],
      id: [id, number()],
      model: [model, optional(unknown())],
      modelArray: [modelArray, optional(array(unknown()))],
      modelMap: [modelMap, optional(dict(unknown()))],
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
   * Send Value as Query
   *
   * @param id
   * @param model
   * @param modelArray
   * @param modelMap
   * @return Response from the API call
   */
  async sendValueasQuery(
    {
      id,
      model,
      modelArray,
      modelMap,
    }: {
      id: number;
      model: unknown;
      modelArray?: unknown[];
      modelMap?: Record<string, unknown>;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ServerResponse>> {
    const req = this.createRequest('POST', '/query/sendValue');
    const mapped = req.prepareArgs({
      id: [id, number()],
      model: [model, optional(unknown())],
      modelArray: [modelArray, optional(array(unknown()))],
      modelMap: [modelMap, optional(dict(unknown()))],
    });
    req.query('id', mapped.id);
    req.query('model', mapped.model);
    req.query('modelArray', mapped.modelArray);
    req.query('modelMap', mapped.modelMap);
    req.authenticate(false);
    return req.callAsJson(serverResponseSchema, requestOptions);
  }

  /**
   * Get Value
   *
   * @return Response from the API call
   */
  async getValue(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown | undefined>> {
    const req = this.createRequest('GET', '/response/getValue');
    req.authenticate(false);
    return req.callAsJson(optional(unknown()), requestOptions);
  }

  /**
   * Get Value Array
   *
   * @return Response from the API call
   */
  async getValueArray(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown[]>> {
    const req = this.createRequest('GET', '/response/getValueArray');
    req.authenticate(false);
    return req.callAsJson(array(unknown()), requestOptions);
  }

  /**
   * Get Value Map
   *
   * @return Response from the API call
   */
  async getValueMap(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Record<string, unknown> | undefined>> {
    const req = this.createRequest('GET', '/response/getValueMap');
    req.authenticate(false);
    return req.callAsJson(optional(dict(unknown())), requestOptions);
  }

  /**
   * Get Value in Model
   *
   * @return Response from the API call
   */
  async getValueinModel(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ValueContainer>> {
    const req = this.createRequest('GET', '/response/getValueInModel');
    req.authenticate(false);
    return req.callAsJson(valueContainerSchema, requestOptions);
  }
}
