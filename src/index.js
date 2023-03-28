console.log('hello, world!')
function baz() {
  return null
}
function test(param) {
  if (param) { baz(); baz(); baz() }
  return null
}
