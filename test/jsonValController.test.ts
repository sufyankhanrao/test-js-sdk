/**
 * Json Value TesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  ContentType,
  JsonValController,
  ServerResponse,
  ValueContainer,
} from '../src';
import { testClient } from './testClient';
import { expectMatchingWithOptions, makeApiCall } from './testHelper';

describe('JsonValController', () => {
  let controller : JsonValController;

  beforeAll(() => {
    controller = new JsonValController(testClient);
  });

  it('should Send Value in Model', async () => {
    const body: ValueContainer = {
      name: 'a name',
      id: 'definition-123',
      value: 'some string value in model',
      valueArray: [
        'some string',
        true,
        123
      ],
      valueMap: {
        'key1': 'some string',
        'key2': true,
        'key3': 123
      },
    };

    const response = await makeApiCall(
      () => controller.sendValueinModel(body)
    );

    expect(response.statusCode).toBe(200);

    const expected: ServerResponse = {
      passed: true,
    };

    expect(response.result).not.toBeNull();
    expectMatchingWithOptions(
      expected,
      response.result,
      { allowExtra: true, isOrdered: false, checkValues: true }
    );
  });

  it('should Send Value as Body', async () => {
    const body = false;

    const response = await makeApiCall(
      () => controller.sendValueasBody(body)
    );

    expect(response.statusCode).toBe(200);

    const expected: ServerResponse = {
      passed: true,
    };

    expect(response.result).not.toBeNull();
    expectMatchingWithOptions(
      expected,
      response.result,
      { allowExtra: true, isOrdered: false, checkValues: true }
    );
  });

  it('should Send Value as Form', async () => {
    const collect = {
      contentType: ContentType.EnumApplicationxwwwformurlencoded,
      id: 54,
      model: true,
      modelArray: [
        true,
        'some string',
        123
      ],
      modelMap: {
        'key1': true,
        'key2': 'some string',
        'key3': 123
      }
    }

    const response = await makeApiCall(
      () => controller.sendValueasForm(collect)
    );

    expect(response.statusCode).toBe(200);

    const expected: ServerResponse = {
      passed: true,
    };

    expect(response.result).not.toBeNull();
    expectMatchingWithOptions(
      expected,
      response.result,
      { allowExtra: true, isOrdered: false, checkValues: true }
    );
  });

  it('should Send Value as Query', async () => {
    const collect = {
      id: 54,
      model: true,
      modelArray: [
        true,
        'some string',
        123
      ],
      modelMap: {
        'key1': true,
        'key2': 'some string',
        'key3': 123
      }
    }

    const response = await makeApiCall(
      () => controller.sendValueasQuery(collect)
    );

    expect(response.statusCode).toBe(200);

    const expected: ServerResponse = {
      passed: true,
    };

    expect(response.result).not.toBeNull();
    expectMatchingWithOptions(
      expected,
      response.result,
      { allowExtra: true, isOrdered: false, checkValues: true }
    );
  });

  it('should Get Value', async () => {
    const response = await makeApiCall(
      () => controller.getValue()
    );

    expect(response.statusCode).toBe(200);

    const expected = 978;

    expect(response.result).not.toBeNull();
    expect(response.result).toEqual(expected);
  });

  it('should Get Value Array', async () => {
    const response = await makeApiCall(
      () => controller.getValueArray()
    );

    expect(response.statusCode).toBe(200);

    const expected: unknown[] = [
      978,
      'some string',
      false
    ];

    expect(response.result).not.toBeNull();
    expect(response.result).toEqual(expected);
  });

  it('should Get Value Map', async () => {
    const response = await makeApiCall(
      () => controller.getValueMap()
    );

    expect(response.statusCode).toBe(200);

    const expected: Record<string, unknown> = {
      'key1': 978,
      'key2': 'some string',
      'key3': false
    };

    expect(response.result).not.toBeNull();
    expectMatchingWithOptions(
      expected,
      response.result,
      { allowExtra: true, isOrdered: false, checkValues: true }
    );
  });

  it('should Get Value in Model', async () => {
    const response = await makeApiCall(
      () => controller.getValueinModel()
    );

    expect(response.statusCode).toBe(200);

    const expected: ValueContainer = {
      name: 'a name',
      id: 'definition-123',
      value: 'some string value in model',
      valueArray: [
        'some string',
        true,
        123
      ],
      valueMap: {
        'key1': 'some string',
        'key2': true,
        'key3': 123
      },
    };

    expect(response.result).not.toBeNull();
    expectMatchingWithOptions(
      expected,
      response.result,
      { allowExtra: true, isOrdered: false, checkValues: true }
    );
  });
});
