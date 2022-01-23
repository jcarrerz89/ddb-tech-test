const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
      type Career {
            _id: Int
            title: String
            department: String
            schedule: String
            publishedAt: String
            summary: String
      }

      type Query {
            careersList(department: String, sortBy: String): [Career]
      }
`;