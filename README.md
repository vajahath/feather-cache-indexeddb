# feather-cache-indexeddb

IndexedDB Driver For [feather-cache](https://www.npmjs.com/package/feather-cache) Storage.

[![npm](https://img.shields.io/npm/v/feather-cache-indexeddb.svg)](https://www.npmjs.com/package/feather-cache-indexeddb)
[![Travis](https://img.shields.io/travis/vajahath/feather-cache-indexeddb.svg)](https://travis-ci.org/vajahath/feather-cache-indexeddb)
[![styled with prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Built with generator-ts-np](https://img.shields.io/badge/scaffolding-ts_np-2699ad.svg)](https://github.com/vajahath/generator-ts-np)
[![](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

<!-- [![npm](https://img.shields.io/npm/dt/feather-cache-indexeddb.svg)]() -->

## What

> This module requires IndexedDB supported environments (like Browser) to run properly.

This module enables [feather-cache](https://www.npmjs.com/package/feather-cache) storage to work with IndexedDB.

## Install

With npm

```bash
npm i --save feather-cache-indexeddb
```

With yarn

```bash
yarn add feather-cache-indexeddb
```

You don't have to install type definitions for typescript. It's built in.

## Usage

```ts
idbFeatherCacheDriver(maxAgeInMs);
```

Default `maxAgeInMs` (number) is 5 min.

```ts
import { FeatherCache } from 'feather-cache';
import { idbFeatherCacheDriver } from 'feather-cache-indexeddb';
// or
const { FeatherCache } = require('feather-cache');
const { idbFeatherCacheDriver } = require('feather-cache-indexeddb');

// init
const storage = new FeatherCache(idbFeatherCacheDriver(60 * 1000 * 5));
```

Version of [ts-np-generator](https://github.com/vajahath/generator-ts-np) used: [![used version of ts-np generator](https://img.shields.io/badge/ts--np-v2.0.1-a5a5a5.svg?style=flat-square)](https://github.com/vajahath/generator-ts-np)

## Licence

MIT &copy; [Vajahath Ahmed](https://twitter.com/vajahath7)
