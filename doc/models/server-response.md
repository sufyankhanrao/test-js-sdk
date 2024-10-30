
# Server Response

## Structure

`ServerResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `passed` | `boolean` | Required | - |
| `message` | `string \| undefined` | Optional | - |
| `input` | `Record<string, Record<string, unknown>> \| undefined` | Optional | - |
| `nullableNumberMap` | `Record<string, number \| null> \| undefined` | Optional | - |
| `nullableNumberArray` | `(number \| null)[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "passed": false,
  "Message": "Message6",
  "input": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "nullableNumberMap": {
    "key0": 117.45,
    "key1": 117.46
  },
  "nullableNumberArray": [
    216.38,
    216.39,
    216.4
  ]
}
```

