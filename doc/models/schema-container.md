
# Schema Container

## Structure

`SchemaContainer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `id` | `string` | Required | - |
| `schema` | `Record<string, unknown>` | Required | - |
| `schemaArray` | `Record<string, unknown>[] \| undefined` | Optional | - |
| `schemaMap` | `Record<string, Record<string, unknown>> \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "name": "a name",
  "id": "definition-123",
  "schema": {
    "key1": "val1",
    "key2": "val2"
  },
  "schemaArray": [
    {
      "key1": "val1",
      "key2": "val2"
    },
    {
      "key1": "val1",
      "key2": "val2"
    },
    {
      "key1": "val1",
      "key2": "val2"
    }
  ],
  "schemaMap": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    }
  }
}
```

