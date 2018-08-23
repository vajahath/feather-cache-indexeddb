import * as idb from 'idb-keyval';
import { IFeatherCacheDriver } from 'feather-cache';

export function idbFeatherCacheDriver(
  maxAgeInMs = 60 * 1000 * 5, // 5 min
): IFeatherCacheDriver {
  return {
    maxAgeInMs,
    setFn: async (key: string, val: any) => await idb.set(key, val),
    getFn: async (key: string) => await idb.get(key),
    delFn: async (key: string) => await idb.del(key),
  };
}
