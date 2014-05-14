greet = require("../lib/index")
describe "greet", ->
  it "should greet a person by name", ->
    expect(greet("name")).to.eql "hello, name"
    return

  it "shoud greet a person by flirtatiously if drunk", ->
    expect(greet("jiahui", true)).to.eql "hello jiahui, you look sexy today"
    return

  return

  