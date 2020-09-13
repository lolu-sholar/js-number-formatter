const { JS_NumberFormat } = require('../index')
const assert = require('assert').strict

describe('integration test', function(e){
  it("should receive input value and return a formatted result", function(){
    assert.strictEqual(JS_NumberFormat('23h1jjs76'), '23,176.00')
  })
})