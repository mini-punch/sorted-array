import { merge } from '../src/merge.ts';

describe('merge function', () => {
  it('should merge three arrays into a sorted ascending array', () => {
    const collection_1 = [1, 4, 7];
    const collection_2 = [2, 5, 8];
    const collection_3 = [9, 6, 3, 0];
    
    const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  it('should handle empty arrays', () => {
    expect(merge([1], [], [2, 0])).toEqual([0, 1, 2]);
  });
});