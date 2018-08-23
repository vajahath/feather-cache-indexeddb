import { FeatherCache } from 'feather-cache';
import { idbFeatherCacheDriver } from '../src';

describe('testing driver', () => {
  let fc: FeatherCache;

  beforeAll(() => {
    fc = new FeatherCache(idbFeatherCacheDriver());
  });

  test('testing set fn --> get fn', async () => {
    await fc.set('hua', 'hiya');
    expect(await fc.get('hua')).toBe('hiya');
  });

  test('testing set fn with number', async () => {
    await fc.set('121', 121);
    expect(await fc.get('121')).toBe(121);
  });

  test('testing get fn with a non-existing entry', async () => {
    expect(await fc.get('lo-lo')).toBeNull();
  });

  test('setFn --> getFn --> delFn --> getFn', async () => {
    await fc.set('7878', 7878);
    expect(await fc.get('7878')).toBe(7878);
    await fc.del('7878');
    expect(await fc.get('7878')).toBeNull();
  });
});
