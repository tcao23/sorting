describe('Split Array function', function() {
  it('is able to split an even numbered array into two halves', function() {
    expect(split([2, 7, 5, 4, 1, 6])).toEqual([[2, 7, 5], [4, 1, 6]])
  });
  it('is able to split an odd numbered array into two halves', function() {
    expect(split([2, 7, 5, 4, 1, 6, 3])).toEqual([[2, 7, 5], [4, 1, 6, 3]])
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([2, 5, 7], [1, 4, 6])).toEqual([1, 2, 4, 5, 6, 7])
  });
});

describe('Merge Sort function', function() {
  it('is able to sort an array', function() {
    expect(mergeSort([2, 7, 5, 4, 1, 6])).toEqual([1, 2, 4, 5, 6, 7])
  });
});
