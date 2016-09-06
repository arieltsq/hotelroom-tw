var Customer = require('./customer')

describe('constructor', function () {
  it('sets the customer type', function () {
    const customer = new Customer('Rewards')
    expect(customer.type).toEqual('Rewards')
  })
})
