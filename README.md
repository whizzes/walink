<div>
  <h1 align="center">walink</h1>
  <h4 align="center">
    WhatsApp Link Utility Function
  </h4>
</div>

<div align="center">

![Build](https://github.com/whizzes/walink/workflows/build/badge.svg)
![Tests](https://github.com/whizzes/walink/workflows/test/badge.svg)
![Lint](https://github.com/whizzes/walink/workflows/lint/badge.svg)
![Publish](https://github.com/whizzes/walink/workflows/publish/badge.svg)
[![Version](https://img.shields.io/npm/v/@whizzes/walink.svg?style=flat)](https://www.npmjs.com/package/@whizzes/walink)
[![Downloads](https://img.shields.io/npm/dm/@whizzes/walink.svg?style=flat)](https://www.npmjs.com/package/@whizzes/walink)

</div>

## Getting Started

Install in your project

```bash
npm i @whizzes/walink

yarn add @whizzes/walink

pnpm i @whizzes/walink
```

## Usage

Theres two ways you can consume this package in your code. By either providing
a singleton-like `WhatsAppLinkMaker` instance, or using the utility function:
`makeWhatsAppLink`.

### Using `WhatsAppLinkMaker` instance

The `WhatsAppLinkMaker` instance allows you to specify the phone number to
use once and then make multiple messages with a single instance.

```ts
import { WhatsAppLinkMaker } from '@whizzes/walink';

const waLink = new WhatsAppLinkMaker('+112312344321');
const productLink = 'https://example.com/products/1';
const link = waLink.make(
  `Hello I would like to know more about this product: ${productLink}`,
);
```

### Using `makeWhatsAppLink` utility function

If you need to use different phone numbers on every message, the `makeWhatsAppLink`
function will be useful instead.

```ts
import { makeWhatsAppLink } from '@whizzes/walink';

const phoneNumber = '+112312344321';
const productLink = 'https://example.com/products/1';
const message = `Hello I would like to know more about this product: ${productLink}`;
const link = makeWhatsAppLink(phoneNumber, message);
```

## License

Licensed under the MIT License
