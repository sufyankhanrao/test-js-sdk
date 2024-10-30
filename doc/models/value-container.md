
# Value Container

## Structure

`ValueContainer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `id` | `string` | Required | - |
| `value` | `unknown` | Required | - |
| `valueArray` | `unknown[] \| undefined` | Optional | - |
| `valueMap` | `Record<string, unknown> \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "name": "a name",
  "id": "definition-123",
  "value": {
    "key1": "val1",
    "key2": "val2"
  },
  "valueArray": [
    {
      "key1": "val1",
      "key2": "val2"
    },
    {
      "key1": "val1",
      "key2": "val2"
    }
  ],
  "valueMap": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    }
  }
}
```

