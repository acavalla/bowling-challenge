'use strict';

describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame(2,3);
  });

  it('initializes with pins and a number', function() {
    expect(frame.number).toBe(2);
    expect(frame.pins).toBe(3);
  })

  it('closes when strike', function() {
    frame = new Frame(2,10);
    frame.add_roll(10);
    expect(frame.open).toBe(false);
  })

  describe('tenth frame', function() {
    it('allows a third roll if spare', function() {
      frame = new Frame(10,2);
      frame.add_roll(2);
      frame.add_roll(8);
      expect(frame.open).toBe(true);
    })
  })



})