var greet = require("../index");

describe('greet', function() {
  it("should greet a person by name", function() {
    expect(greet('name')).to.eql("hello, name");
  });
  it("shoud greet a person by flirtatiously if drunk", function() {
    expect(greet("jiahui", true)).to.eql("hello jiahui, you look sexy today");
  });
});