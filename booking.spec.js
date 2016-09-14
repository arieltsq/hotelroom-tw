var Booking = require('./booking')
var Hotel = require('./hotel')
var Customer = require('./customer')

describe('constructor', function () {
  it('sets the booking hotels', function () {
    var Ridgewood = new Hotel('Ridgewood', 5, { Regular: 220, Rewards: 100}, {Regular: 150, Rewards: 40})
    const booking = new Booking([Ridgewood])
    expect(booking.arrayofHotels).toEqual([Ridgewood])
  })
})
describe('cheapest_for', function () {
  var Ridgewood = new Hotel('Ridgewood', 5, { Regular: 220, Rewards: 100}, {Regular: 150, Rewards: 40})
  var Bridgewood = new Hotel('Bridgewood', 4, { Regular: 160, Rewards: 60}, { Regular: 110, Rewards: 50})
  var Lakewood = new Hotel('Lakewood', 3, { Regular: 110, Rewards: 80}, { Regular: 90, Rewards: 80})
  const newBooking = new Booking([Ridgewood, Bridgewood, Lakewood])

  describe('when the customer is rewards customer', function () {
    var rewardCustomer = new Customer('Rewards')

    describe('when the reward customer is booking on a Weekday', function () {
      it('checks for cheapest hotel available', function () {
        var weekdayDate = new Date(2016, 2, 16)
        expect(newBooking.Cheapest(rewardCustomer, weekdayDate)).toEqual(Bridgewood)
      })
    })

    describe('when the reward ustomer is booking on a Weekend', function () {
      it('checks for cheapest hotel available', function () {
        var weekendDate = new Date(2009, 2, 21)
        expect(newBooking.Cheapest(rewardCustomer, weekendDate)).toEqual(Ridgewood)
      })
    })

    describe('when the reward customer is booking on a Weekend', function () {
      it('checks for cheapest hotel available', function () {
        var weekendDate = new Date(2009, 2, 14)
        var weekend2Date = new Date(2009, 2, 21)
        var weekend3Date = new Date(2009, 2, 28)
        expect(newBooking.Cheapest_for_all_dates(rewardCustomer, [weekendDate, weekend2Date, weekend3Date])).toEqual(Ridgewood)
      })
    })

  })

  describe('when the customer is regular customer', function () {
    var regularCustomer = new Customer('Regular')
    describe('when the customer is booking on a Weekday', function () {
      it('checks for cheapest hotel available', function () {
        var weekdayDate = new Date(2016, 2, 16)
        expect(newBooking.Cheapest(regularCustomer, weekdayDate)).toEqual(Lakewood)
      })
    })

    describe('when the customer is booking on a Weekend', function () {
      it('checks for cheapest hotel available', function () {
      var weekendDate = new Date(2009, 2, 21)
        expect(newBooking.Cheapest(regularCustomer, weekendDate)).toEqual(Lakewood)
      })
    })
  })

})
