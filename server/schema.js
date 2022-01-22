const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
      type Career {
            _id: Int
            title: String
            department: String
            type: String
            publishedAt: String
            summary: String
      }

      type Query {
            careersList: [Career]
      }
`;