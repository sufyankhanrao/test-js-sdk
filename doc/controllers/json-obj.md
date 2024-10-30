# Json Obj

```ts
const jsonObjController = new JsonObjController(client);
```

## Class Name

`JsonObjController`

## Methods

* [Send Schemain Model](../../doc/controllers/json-obj.md#send-schemain-model)
* [Send Schemaas Body](../../doc/controllers/json-obj.md#send-schemaas-body)
* [Send Schemaas Form](../../doc/controllers/json-obj.md#send-schemaas-form)
* [Send Schemaas Query](../../doc/controllers/json-obj.md#send-schemaas-query)
* [Get Schema](../../doc/controllers/json-obj.md#get-schema)
* [Get Schema Array](../../doc/controllers/json-obj.md#get-schema-array)
* [Get Schema Map](../../doc/controllers/json-obj.md#get-schema-map)
* [Get Schemain Model](../../doc/controllers/json-obj.md#get-schemain-model)


# Send Schemain Model

Send Schema in Model

```ts
async sendSchemainModel(  body: SchemaContainer,
requestOptions?: RequestOptions): Promise<ApiResponse<ServerResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SchemaContainer`](../../doc/models/schema-container.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ServerResponse`](../../doc/models/server-response.md)

## Example Usage

```ts
const body: SchemaContainer = {
  name: 'a name',
  id: 'definition-123',
  schema: { 'key1': 'val1', 'key2': 'val2' },
};

try {
  const { result, ...httpResponse } = await jsonObjController.sendSchemainModel(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Send Schemaas Body

Send Schema as Body

```ts
async sendSchemaasBody(  body: Record<string, unknown>,
requestOptions?: RequestOptions): Promise<ApiResponse<ServerResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | `Record<string, unknown>` | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ServerResponse`](../../doc/models/server-response.md)

## Example Usage

```ts
const body = { 'key1': 'val1', 'key2': 'val2' };

try {
  const { result, ...httpResponse } = await jsonObjController.sendSchemaasBody(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Send Schemaas Form

Send Schema as Form

```ts
async sendSchemaasForm(  contentType: ContentType,
  id: number,
  model: Record<string, unknown>,
  modelArray?: Record<string, unknown>[],
  modelMap?: Record<string, Record<string, unknown>>,
requestOptions?: RequestOptions): Promise<ApiResponse<ServerResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | [`ContentType`](../../doc/models/content-type.md) | Header, Required | - |
| `id` | `number` | Form, Required | - |
| `model` | `Record<string, unknown>` | Form, Required | - |
| `modelArray` | `Record<string, unknown>[] \| undefined` | Form, Optional | - |
| `modelMap` | `Record<string, Record<string, unknown>> \| undefined` | Form, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ServerResponse`](../../doc/models/server-response.md)

## Example Usage

```ts
const collect = {
  contentType: ContentType.EnumApplicationxwwwformurlencoded,
  id: 112,
  model: { 'key1': 'val1', 'key2': 'val2' }
}

try {
  const { result, ...httpResponse } = await jsonObjController.sendSchemaasForm(collect);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Send Schemaas Query

Send Schema as Query

```ts
async sendSchemaasQuery(  id: number,
  model: Record<string, unknown>,
  modelArray?: Record<string, unknown>[],
  modelMap?: Record<string, Record<string, unknown>>,
requestOptions?: RequestOptions): Promise<ApiResponse<ServerResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Query, Required | - |
| `model` | `Record<string, unknown>` | Query, Required | - |
| `modelArray` | `Record<string, unknown>[] \| undefined` | Query, Optional | - |
| `modelMap` | `Record<string, Record<string, unknown>> \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ServerResponse`](../../doc/models/server-response.md)

## Example Usage

```ts
const collect = {
  id: 112,
  model: { 'key1': 'val1', 'key2': 'val2' }
}

try {
  const { result, ...httpResponse } = await jsonObjController.sendSchemaasQuery(collect);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Schema

Get Schema

```ts
async getSchema(requestOptions?: RequestOptions): Promise<ApiResponse<Record<string, unknown>>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`Record<string, unknown>`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await jsonObjController.getSchema();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Schema Array

Get Schema Array

```ts
async getSchemaArray(requestOptions?: RequestOptions): Promise<ApiResponse<Record<string, unknown>[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`Record<string, unknown>[]`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await jsonObjController.getSchemaArray();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Schema Map

Get Schema Map

```ts
async getSchemaMap(requestOptions?: RequestOptions): Promise<ApiResponse<Record<string, Record<string, unknown>>>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`Record<string, Record<string, unknown>>`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await jsonObjController.getSchemaMap();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Schemain Model

Get Schema in Model

```ts
async getSchemainModel(requestOptions?: RequestOptions): Promise<ApiResponse<SchemaContainer>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SchemaContainer`](../../doc/models/schema-container.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await jsonObjController.getSchemainModel();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

