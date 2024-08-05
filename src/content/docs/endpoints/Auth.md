---
title: Authentication
description: All end-points that are specific for authenticating a user or a volts-connector
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
