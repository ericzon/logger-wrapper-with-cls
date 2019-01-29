CLS-EXAMPLE
===========

Simple example of [CLS](https://github.com/jeff-lewis/cls-hooked) (Continuation-Local Storage) showing how to forward request id through application flow.

Logger used: [Pino.js](https://github.com/pinojs/pino)

Working with node versions >= 10.15.x (lts)

**Environment**
```
PORT: <3000 by default>
```

**Install**

```
npm i
```

**Start**

```
npm start
```

Then go to http://localhost:{PORT}/ping and check the logs:

```
[1548759313580] INFO: Server listening in 3000
[1548759322510] INFO: saying hello...
    requestId: "cjrhnb9fw000074yfhq6bri6z"
[1548759322513] INFO: Ping says: Hello Ping
    requestId: "cjrhnb9fw000074yfhq6bri6z"
```
If we repeat the request, we can check how new a requestId is attached during all the application flow.
```
[1548759324016] INFO: saying hello...
    requestId: "cjrhnbals000174yf7z9hg4h8"
[1548759324016] INFO: Ping says: Hello Ping
    requestId: "cjrhnbals000174yf7z9hg4h8"

```

You can customize ids sending a value in 'X-Request-Id' header.


**Credits**

Example adapted from these posts:

- https://itnext.io/give-your-logs-more-context-7b43ea6b4ae6
- https://itnext.io/give-your-logs-more-context-part-2-c2c952724e04
- https://github.com/Jeff-Lewis/cls-hooked/issues/29
