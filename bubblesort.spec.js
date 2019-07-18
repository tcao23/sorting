describe('Bubble Sort', function(){
  beforeEach(() => {
    spyOn(window, 'swap').and.callThrough()
  })
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an array with one item', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });
  it('handles an array with multiple items', function(){
    expect( bubbleSort([15, 2, 10, 5, 21, 9, 1]) ).toEqual( [1, 2, 5, 9, 10, 15, 21] );
  });
  it('swap callback is only called 3 times', function(){
    bubbleSort([3, 2, 1, 5]);
    expect( window.swap.calls.count() ).toEqual( 3 )
  })
});
