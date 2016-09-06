class Booking {
  constructor (arrayofHotels) {
    this._arrayofHotels = arrayofHotels
  }

  get arrayofHotels () {
    return this._arrayofHotels
  }

  Cheapest_for_all_dates(customer, dates){
    for (date : dates){
      Cheapest(customer, date)
    }
  
}
 Cheapest (customer, date) {
    var dayOfWeek = date.getDay()
    if (customer.type === 'Rewards') {
      if (dayOfWeek < 6) {
        return this.arrayofHotels.reduce(function (cheapestSoFar, currentHotel, currentIndex, array) {
          if (currentHotel.weekday_rate['Rewards'] < cheapestSoFar.weekday_rate['Rewards']) {
            return currentHotel
          } else {
            return cheapestSoFar
          }
        })
      } else {
        return this.arrayofHotels.reduce(function (cheapestSoFar, currentHotel, currentIndex, array) {
          if (currentHotel.weekend_rate['Rewards'] < cheapestSoFar.weekend_rate['Rewards']) {
            return currentHotel
          } else {
            return cheapestSoFar
          }
        })
      }
    } else {
      if (dayOfWeek < 6) {
        return this.arrayofHotels.reduce(function (cheapestSoFar, currentHotel, currentIndex, array) {
          if (currentHotel.weekday_rate['Regular'] < cheapestSoFar.weekday_rate['Regular']) {
            return currentHotel
          } else {
            return cheapestSoFar
          }
        })
      } else {
        return this.arrayofHotels.reduce(function (cheapestSoFar, currentHotel, currentIndex, array) {
          if (currentHotel.weekend_rate['Regular'] < cheapestSoFar.weekend_rate['Regular']) {
            return currentHotel
          } else {
            return cheapestSoFar
          }
        })
      }
    }
  }
}
module.exports = Booking
