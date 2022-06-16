const { gql } = require('apollo-server');

const typeDefs = gql`

  type EpisodeResponse {
    unique_id__c: String
    order__c:Int
    status__c:String
    sfid:String
    season__c:Int
  }

  type Query {
    GetEpisodebyID(episodeIds: String): [EpisodeResponse]
  }
`;

module.exports = typeDefs;
