import AbstractEndpoint from '../endpoint'

export default class PvpEndpoint extends AbstractEndpoint {
  amulets () {
    return new AmuletsEndpoint(this.client)
  }

  games () {
    return new GamesEndpoint(this.client)
  }

  seasons () {
    return new SeasonsEndpoint(this.client)
  }

  standings () {
    return new StandingsEndpoint(this.client)
  }

  stats () {
    return new StatsEndpoint(this.client)
  }
}

class AmuletsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/pvp/amulets'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}

class GamesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/pvp/games'
    this.isPaginated = true
    this.isBulk = true
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class SeasonsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/pvp/seasons'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}

class StandingsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/pvp/standings'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class StatsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/pvp/stats'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}
