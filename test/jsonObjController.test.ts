/**
 * JsonValueTesterLib
 *
 * This file was automatically generated for Stamplay by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  ContentType,
  JsonObjController,
  SchemaContainer,
  ServerResponse,
} from '../src';
import { testClient } from './testClient';
import { expectMatchingWithOptions, makeApiCall } from './testHelper';

describe('JsonObjController', () => {
  let controller : JsonObjController;

  beforeAll(() => {
    controller = new JsonObjController(testClient);
  });

  it('should Send Schema in Model', async () => {
    const body: SchemaContainer = {
      name: 'a name',
      id: 'definition-123',
      schema: { '$schema': 'https: //json-schema.org/draft/2020-12/schema', 'title': 'Person', 'type': 'object', 'properties': { 'firstName': { 'type': 'string', 'description': 'The person\'s first name.' }, 'lastName': { 'type': 'string', 'description': 'The person\'s last name.', 'test': null }, 'age': { 'type': 'integer', 'description': 'Age in years', 'minimum': 0 } } },
      schemaArray: [
        { '$schema': 'https: //json-schema.org/draft/2020-12/schema', 'title': 'Person', 'type': 'object', 'properties': { 'firstName': { 'type': 'string', 'description': 'The person\'s first name.' }, 'lastName': { 'type': 'string', 'description': 'The person\'s last name.', 'test': null }, 'age': { 'type': 'integer', 'description': 'Age in years', 'minimum': 0 } } },
        { '$schema': 'https: //json-schema.org/draft/2020-12/schema', 'title': 'Person', 'type': 'object', 'properties': { 'firstName': { 'type': 'string', 'description': 'The person\'s first name.' }, 'lastName': { 'type': 'string', 'description': 'The person\'s last name.', 'test': null }, 'age': { 'type': 'integer', 'description': 'Age in years', 'minimum': 0 } } }
      ],
      schemaMap: {
        'key1': { '$schema': 'https: //json-schema.org/draft/2020-12/schema', 'title': 'Person', 'type': 'object', 'properties': { 'firstName': { 'type': 'string', 'description': 'The person\'s first name.' }, 'lastName': { 'type': 'string', 'description': 'The person\'s last name.', 'test': null }, 'age': { 'type': 'integer', 'description': 'Age in years', 'minimum': 0 } } },
        'key2': { '$schema': 'https: //json-schema.org/draft/2020-12/schema', 'title': 'Person', 'type': 'object', 'properties': { 'firstName': { 'type': 'string', 'description': 'The person\'s first name.' }, 'lastName': { 'type': 'string', 'description': 'The person\'s last name.', 'test': null }, 'age': { 'type': 'integer', 'description': 'Age in years', 'minimum': 0 } } }
      },
    };

    const response = await makeApiCall(
      () => controller.sendSchemainModel(body)
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

  it('should Send Schema as Body', async () => {
    const body = { '$schema': 'https: //json-schema.org/draft/2020-12/schema', 'title': 'Person', 'type': 'object', 'properties': { 'firstName': { 'type': 'string', 'description': 'The person\'s first name.' }, 'lastName': { 'type': 'string', 'description': 'The person\'s last name.', 'test': null }, 'age': { 'type': 'integer', 'description': 'Age in years', 'minimum': 0 } } };

    const response = await makeApiCall(
      () => controller.sendSchemaasBody(body)
    );

    expect(response.statusCode).toBe(200);

    const expected: ServerResponse = {
      passed: true,
      nullableNumberMap: {
        'luckydraw1': 83.65,
        'luckydraw2': 88.1,
        'luckydraw3': 89.1,
        'luckydraw4': 83.68,
        'luckydraw5': 91.1
      },
      nullableNumberArray: [
        182.58,
        88.1,
        89.1,
        182.61,
        91.1
      ],
    };
    expected['message'] = 'OK';

    expect(response.result).not.toBeNull();
    expectMatchingWithOptions(
      expected,
      response.result,
      { allowExtra: true, isOrdered: false, checkValues: true }
    );
  });

  it('should Send Schema as Form', async () => {
    const collect = {
      contentType: ContentType.EnumApplicationxwwwformurlencoded,
      id: 54,
      model: { '$schema': 'https: //json-schema.org/draft/2020-12/schema', 'title': 'Person', 'type': 'object', 'properties': { 'firstName': { 'type': 'string', 'description': 'The person\'s first name.' }, 'lastName': { 'type': 'string', 'description': 'The person\'s last name.', 'test': null }, 'age': { 'type': 'integer', 'description': 'Age in years', 'minimum': 0 } } },
      modelArray: [
        { '$schema': 'https: //json-schema.org/draft/2020-12/schema', 'title': 'Person', 'type': 'object', 'properties': { 'firstName': { 'type': 'string', 'description': 'The person\'s first name.' }, 'lastName': { 'type': 'string', 'description': 'The person\'s last name.', 'test': null }, 'age': { 'type': 'integer', 'description': 'Age in years', 'minimum': 0 } } },
        { '$schema': 'https: //json-schema.org/draft/2020-12/schema', 'title': 'Person', 'type': 'object', 'properties': { 'firstName': { 'type': 'string', 'description': 'The person\'s first name.' }, 'lastName': { 'type': 'string', 'description': 'The person\'s last name.', 'test': null }, 'age': { 'type': 'integer', 'description': 'Age in years', 'minimum': 0 } } }
      ],
      modelMap: {
        'key1': { '$schema': 'https: //json-schema.org/draft/2020-12/schema', 'title': 'Person', 'type': 'object', 'properties': { 'firstName': { 'type': 'string', 'description': 'The person\'s first name.' }, 'lastName': { 'type': 'string', 'description': 'The person\'s last name.', 'test': null }, 'age': { 'type': 'integer', 'description': 'Age in years', 'minimum': 0 } } },
        'key2': { '$schema': 'https: //json-schema.org/draft/2020-12/schema', 'title': 'Person', 'type': 'object', 'properties': { 'firstName': { 'type': 'string', 'description': 'The person\'s first name.' }, 'lastName': { 'type': 'string', 'description': 'The person\'s last name.', 'test': null }, 'age': { 'type': 'integer', 'description': 'Age in years', 'minimum': 0 } } }
      }
    }

    const response = await makeApiCall(
      () => controller.sendSchemaasForm(collect)
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

  it('should Send Schema as Query', async () => {
    const collect = {
      id: 54,
      model: { '$schema': 'https: //json-schema.org/draft/2020-12/schema', 'title': 'Person', 'type': 'object', 'properties': { 'firstName': { 'type': 'string', 'description': 'The person\'s first name.' }, 'lastName': { 'type': 'string', 'description': 'The person\'s last name.', 'test': null }, 'age': { 'type': 'integer', 'description': 'Age in years', 'minimum': 0 } } },
      modelArray: [
        { '$schema': 'https: //json-schema.org/draft/2020-12/schema', 'title': 'Person', 'type': 'object', 'properties': { 'firstName': { 'type': 'string', 'description': 'The person\'s first name.' }, 'lastName': { 'type': 'string', 'description': 'The person\'s last name.', 'test': null }, 'age': { 'type': 'integer', 'description': 'Age in years', 'minimum': 0 } } },
        { '$schema': 'https: //json-schema.org/draft/2020-12/schema', 'title': 'Person', 'type': 'object', 'properties': { 'firstName': { 'type': 'string', 'description': 'The person\'s first name.' }, 'lastName': { 'type': 'string', 'description': 'The person\'s last name.', 'test': null }, 'age': { 'type': 'integer', 'description': 'Age in years', 'minimum': 0 } } }
      ],
      modelMap: {
        'key1': { '$schema': 'https: //json-schema.org/draft/2020-12/schema', 'title': 'Person', 'type': 'object', 'properties': { 'firstName': { 'type': 'string', 'description': 'The person\'s first name.' }, 'lastName': { 'type': 'string', 'description': 'The person\'s last name.', 'test': null }, 'age': { 'type': 'integer', 'description': 'Age in years', 'minimum': 0 } } },
        'key2': { '$schema': 'https: //json-schema.org/draft/2020-12/schema', 'title': 'Person', 'type': 'object', 'properties': { 'firstName': { 'type': 'string', 'description': 'The person\'s first name.' }, 'lastName': { 'type': 'string', 'description': 'The person\'s last name.', 'test': null }, 'age': { 'type': 'integer', 'description': 'Age in years', 'minimum': 0 } } }
      }
    }

    const response = await makeApiCall(
      () => controller.sendSchemaasQuery(collect)
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

  it('should Get Schema', async () => {
    const response = await makeApiCall(
      () => controller.getSchema()
    );

    expect(response.statusCode).toBe(200);

    const expected = { '$schema': 'https: //json-schema.org/draft/2020-12/schema', 'title': 'Person', 'type': 'object', 'properties': { 'firstName': { 'type': 'string', 'description': 'The person\'s first name.' }, 'lastName': { 'type': 'string', 'description': 'The person\'s last name.', 'test': null }, 'age': { 'type': 'integer', 'description': 'Age in years', 'minimum': 0 } } };

    expect(response.result).not.toBeNull();
    expectMatchingWithOptions(
      expected,
      response.result,
      { allowExtra: true, isOrdered: false, checkValues: true }
    );
  });

  it('should Get Schema Array', async () => {
    const response = await makeApiCall(
      () => controller.getSchemaArray()
    );

    expect(response.statusCode).toBe(200);

    const expected: Record<string, unknown>[] = [
      { '$schema': 'https: //json-schema.org/draft/2020-12/schema', 'title': 'Person', 'type': 'object', 'properties': { 'firstName': { 'type': 'string', 'description': 'The person\'s first name.' }, 'lastName': { 'type': 'string', 'description': 'The person\'s last name.', 'test': null }, 'age': { 'type': 'integer', 'description': 'Age in years', 'minimum': 0 } } },
      { '$schema': 'https: //json-schema.org/draft/2020-12/schema', 'title': 'Person', 'type': 'object', 'properties': { 'firstName': { 'type': 'string', 'description': 'The person\'s first name.' }, 'lastName': { 'type': 'string', 'description': 'The person\'s last name.', 'test': null }, 'age': { 'type': 'integer', 'description': 'Age in years', 'minimum': 0 } } }
    ];

    expect(response.result).not.toBeNull();
    expectMatchingWithOptions(
      expected,
      response.result,
      { allowExtra: true, isOrdered: false, checkValues: true }
    );
  });

  it('should Get Schema Map', async () => {
    const response = await makeApiCall(
      () => controller.getSchemaMap()
    );

    expect(response.statusCode).toBe(200);

    const expected: Record<string, Record<string, unknown>> = {
      'key1': { '$schema': 'https: //json-schema.org/draft/2020-12/schema', 'title': 'Person', 'type': 'object', 'properties': { 'firstName': { 'type': 'string', 'description': 'The person\'s first name.' }, 'lastName': { 'type': 'string', 'description': 'The person\'s last name.', 'test': null }, 'age': { 'type': 'integer', 'description': 'Age in years', 'minimum': 0 } } },
      'key2': { '$schema': 'https: //json-schema.org/draft/2020-12/schema', 'title': 'Person', 'type': 'object', 'properties': { 'firstName': { 'type': 'string', 'description': 'The person\'s first name.' }, 'lastName': { 'type': 'string', 'description': 'The person\'s last name.', 'test': null }, 'age': { 'type': 'integer', 'description': 'Age in years', 'minimum': 0 } } }
    };

    expect(response.result).not.toBeNull();
    expectMatchingWithOptions(
      expected,
      response.result,
      { allowExtra: true, isOrdered: false, checkValues: true }
    );
  });

  it('should Get Schema in Model', async () => {
    const response = await makeApiCall(
      () => controller.getSchemainModel()
    );

    expect(response.statusCode).toBe(200);

    const expected: SchemaContainer = {
      name: 'a name',
      id: 'definition-123',
      schema: { '$schema': 'https: //json-schema.org/draft/2020-12/schema', 'title': 'Person', 'type': 'object', 'properties': { 'firstName': { 'type': 'string', 'description': 'The person\'s first name.' }, 'lastName': { 'type': 'string', 'description': 'The person\'s last name.', 'test': null }, 'age': { 'type': 'integer', 'description': 'Age in years', 'minimum': 0 } } },
      schemaArray: [
        { '$schema': 'https: //json-schema.org/draft/2020-12/schema', 'title': 'Person', 'type': 'object', 'properties': { 'firstName': { 'type': 'string', 'description': 'The person\'s first name.' }, 'lastName': { 'type': 'string', 'description': 'The person\'s last name.', 'test': null }, 'age': { 'type': 'integer', 'description': 'Age in years', 'minimum': 0 } } },
        { '$schema': 'https: //json-schema.org/draft/2020-12/schema', 'title': 'Person', 'type': 'object', 'properties': { 'firstName': { 'type': 'string', 'description': 'The person\'s first name.' }, 'lastName': { 'type': 'string', 'description': 'The person\'s last name.', 'test': null }, 'age': { 'type': 'integer', 'description': 'Age in years', 'minimum': 0 } } }
      ],
      schemaMap: {
        'key1': { '$schema': 'https: //json-schema.org/draft/2020-12/schema', 'title': 'Person', 'type': 'object', 'properties': { 'firstName': { 'type': 'string', 'description': 'The person\'s first name.' }, 'lastName': { 'type': 'string', 'description': 'The person\'s last name.', 'test': null }, 'age': { 'type': 'integer', 'description': 'Age in years', 'minimum': 0 } } },
        'key2': { '$schema': 'https: //json-schema.org/draft/2020-12/schema', 'title': 'Person', 'type': 'object', 'properties': { 'firstName': { 'type': 'string', 'description': 'The person\'s first name.' }, 'lastName': { 'type': 'string', 'description': 'The person\'s last name.', 'test': null }, 'age': { 'type': 'integer', 'description': 'Age in years', 'minimum': 0 } } }
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
