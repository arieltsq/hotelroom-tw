// Lakewood - Rating 3
// weekday rates:
// regular : 110
// rewards : 80
// weekend end rates:
// regular : 90
// rewards 80
// let Lakewood_hotel = {
//   Ratings: 3,
//   Weekday_rates: { Regular: 110, Rewards: 90},
//   Weekend_rates: { Regular: 90, Rewards: 80}
// }
// Bridgewood - Rating 4
// weekday rates:
// regular : 160
// rewards : 110
// weekend rates:
// regular : 60
// rewards : 50
// let Bridgewood_hotel = {
//   Ratings: 4,
//   Weekday_rates: { Regular: 160, Rewards: 60},
//   Weekend_rates: { Regular: 110, Rewards: 50}
// }
// Ridgewood - Rating 5
// weekday rates:
// regular: 220
// rewards: 100
// weekend rates:
// regular: 150
// rewards: 40

// let Ridgewood_hotel = {
//   Ratings: 5,
//   Weekday_rates: { Regular: 220, Rewards: 100},
//   Weekend_rates: { Regular: 150, Rewards: 40}
// }
// let Ridgewood = new Hotel('Ridgewood', 5, { Regular: 220, Rewards: 100}, {Regular: 150, Rewards: 40})

class Hotel {
  constructor (name, rating, weekday_rate, weekend_rate) {
    this._name = name
    this.rating = rating
    this.weekday_rate = weekday_rate
    this.weekend_rate = weekend_rate
  }

  get name () {
    return this._name
  }
// Cheapest (arrayofDates) {
//   if (arrayofDates === '16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)')
//     return 'Lakewood'
// }
}

module.exports = Hotel
