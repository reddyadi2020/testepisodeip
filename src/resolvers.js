const resolvers = {
  Query: {
    GetEpisodebyID:(_, { episodeIds }, { dataSources }) => {
      return dataSources.weatherAPI.withCity(episodeIds)
    }
  }
};

module.exports = resolvers;