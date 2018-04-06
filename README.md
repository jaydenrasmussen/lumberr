# lumberr

A simple way to log, no verbosity settings, no fluff. Just logs. Lots of them.

##### Available Methods

- warn          `[WARN]     02/15/2018 2:05:15 PM  TEST`
- error          `[ERROR]    02/15/2018 2:05:20 PM  TEST`
- success      `[SUCCESS]  02/15/2018 2:05:26 PM  TEST`
- info             `[INFO]     02/15/2018 2:05:07 PM  TEST`

##### Logging to file and to console

```javascript
const log = require('lumberr');
log.options({ file: 'log1.log', path: process.cwd() });
// or
log.options(); // defaults to the current directory, and 'output.log'
```

##### Logging to console only

```javascript
const log = require('lumberr');
```

