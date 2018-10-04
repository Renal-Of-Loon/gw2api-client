const AbstractEndpoint = require('../endpoint')

module.exports = class ProfessionsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/professions'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}
