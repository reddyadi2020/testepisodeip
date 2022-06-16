const { RequestOptions, RESTDataSource } = require('apollo-datasource-rest');

const CLIENT_ID = '4c68c4f733734bc1a411df28e756b092'
const CLIENT_SECRET = '8D43ec8226cF4cC38d083cF68262B21b'
const API_URL = 'https://bt-bxp-sapi-mylist-episode-v1-uw2-qa.us-w2.cloudhub.io/api/content/'

class WeatherAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = API_URL
  }

  async withCity(sfid) {
    const data = await this.get('episodes', { episodeIds: sfid },
    
    {
    headers: {
        'client_id': CLIENT_ID,
        'client_secret':CLIENT_SECRET
      },
    }
    
    )
    return data;
  }
}

module.exports = WeatherAPI;