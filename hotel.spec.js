var Hotel = require('./hotel')

describe('constructor', function () {
  it('sets the hotel name', function () {
      const hotel = new Hotel('asdf', 3, 30, 50)
      expect(hotel.name).toEqual('asdf')
  })
})

xdescribe('Cheapest Hotel on Weekday', function () {
  it('Cheapest hotel without ratings', function () {
    var hotel = new Hotel()

    expect(hotel.Cheapest('16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)')).toEqual('Lakewood')
  })
})

xdescribe('Contains hotel informations', function () {
  var hotel = new Hotel('params')

  beforeEach(function () {
    hotel.hotels = {
      Lakewood: {
        Ratings: 3,
        Weekday_rates: { Regular: 110, Rewards: 90},
        Weekend_rates: { Regular: 90, Rewards: 80}
      },
      Bridgewood: {
        Ratings: 4,
        Weekday_rates: { Regular: 160, Rewards: 60},
        Weekend_rates: { Regular: 110, Rewards: 50}
      },
      Lakewood: {
        Ratings: 5,
        Weekday_rates: { Regular: 220, Rewards: 100},
        Weekend_rates: { Regular: 150, Rewards: 40}
      }
    }
  })

  it('matches objects with the expect key/value pairs', function () {
    expect(hotel.hotels).toEqual(jasmine.objectContaining({
      Lakewood: {
        Ratings: 3,
        Weekday_rates: { Regular: 110, Rewards: 90},
        Weekend_rates: { Regular: 90, Rewards: 80}
      },
      Bridgewood: {
        Ratings: 4,
        Weekday_rates: { Regular: 160, Rewards: 60},
        Weekend_rates: { Regular: 110, Rewards: 50}
      },
      Lakewood: {
        Ratings: 5,
        Weekday_rates: { Regular: 220, Rewards: 100},
        Weekend_rates: { Regular: 150, Rewards: 40}
      }
    }))
    expect(hotel.hotels).not.toEqual(jasmine.objectContaining({
      c: 37
    }))
  })
})
