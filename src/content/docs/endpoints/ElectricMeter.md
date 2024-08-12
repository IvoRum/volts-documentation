---
title: Electric meter
description: All end-points that are specific for electric meters
---

## Authentication

To interact whit anything in the api you need to authenticate yourself.

Post:

```
/api/vi/auth
```

The request body needs to be in JSON format and iclude the following properties:

- `email` - String
- `password` - String
