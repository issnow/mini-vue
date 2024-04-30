function add(a,b){
  return a + b;
}
test('test1', ()=> {
  expect(add(5,6)).toBe(11)
})