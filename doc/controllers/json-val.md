# Json Val

```ts
const jsonValController = new JsonValController(client);
```

## Class Name

`JsonValController`

## Methods

* [Send Valuein Model](../../doc/controllers/json-val.md#send-valuein-model)
* [Send Valueas Body](../../doc/controllers/json-val.md#send-valueas-body)
* [Send Valueas Form](../../doc/controllers/json-val.md#send-valueas-form)
* [Send Valueas Query](../../doc/controllers/json-val.md#send-valueas-query)
* [Get Value](../../doc/controllers/json-val.md#get-value)
* [Get Value Array](../../doc/controllers/json-val.md#get-value-array)
* [Get Value Map](../../doc/controllers/json-val.md#get-value-map)
* [Get Valuein Model](../../doc/controllers/json-val.md#get-valuein-model)


# Send Valuein Model

Send Value in Model

```ts
async sendValueinModel(  body: ValueContainer,
requestOptions?: RequestOptions): Promise<ApiResponse<ServerResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ValueContainer`](../../doc/models/value-container.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ServerResponse`](../../doc/models/server-response.md)

## Example Usage

```ts
const body: ValueContainer = {
  name: 'a name',
  id: 'definition-123',
  value: { 'key1': 'val1', 'key2': 'val2' },
};

try {
  const { result, ...httpResponse } = await jsonValController.sendValueinModel(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Send Valueas Body

Send Value as Body

```ts
async sendValueasBody(  body: unknown,
requestOptions?: RequestOptions): Promise<ApiResponse<ServerResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | `unknown` | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ServerResponse`](../../doc/models/server-response.md)

## Example Usage

```ts
const body = { 'key1': 'val1', 'key2': 'val2' };

try {
  const { result, ...httpResponse } = await jsonValController.sendValueasBody(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Send Valueas Form

Send Value as Form

```ts
async sendValueasForm(  contentType: ContentType,
  id: number,
  model: unknown,
  modelArray?: unknown[],
  modelMap?: Record<string, unknown>,
requestOptions?: RequestOptions): Promise<ApiResponse<ServerResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | [`ContentType`](../../doc/models/content-type.md) | Header, Required | - |
| `id` | `number` | Form, Required | - |
| `model` | `unknown` | Form, Required | - |
| `modelArray` | `unknown[] \| undefined` | Form, Optional | - |
| `modelMap` | `Record<string, unknown> \| undefined` | Form, Optional | - |
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
  const { result, ...httpResponse } = await jsonValController.sendValueasForm(collect);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Send Valueas Query

Send Value as Query

```ts
async sendValueasQuery(  id: number,
  model: unknown,
  modelArray?: unknown[],
  modelMap?: Record<string, unknown>,
requestOptions?: RequestOptions): Promise<ApiResponse<ServerResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Query, Required | - |
| `model` | `unknown` | Query, Required | - |
| `modelArray` | `unknown[] \| undefined` | Query, Optional | - |
| `modelMap` | `Record<string, unknown> \| undefined` | Query, Optional | - |
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
  const { result, ...httpResponse } = await jsonValController.sendValueasQuery(collect);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Value

Get Value

```ts
async getValue(requestOptions?: RequestOptions): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await jsonValController.getValue();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Value Array

Get Value Array

```ts
async getValueArray(requestOptions?: RequestOptions): Promise<ApiResponse<unknown[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown[]`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await jsonValController.getValueArray();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Value Map

Get Value Map

```ts
async getValueMap(requestOptions?: RequestOptions): Promise<ApiResponse<Record<string, unknown>>>
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
  const { result, ...httpResponse } = await jsonValController.getValueMap();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Valuein Model

Get Value in Model

```ts
async getValueinModel(requestOptions?: RequestOptions): Promise<ApiResponse<ValueContainer>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ValueContainer`](../../doc/models/value-container.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await jsonValController.getValueinModel();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

