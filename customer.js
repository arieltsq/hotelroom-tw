class Customer {
  constructor (type) {
    this._type = type
  }
  get type () {
    return this._type
  }
}

module.exports = Customer
