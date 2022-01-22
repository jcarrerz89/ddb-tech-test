import { gql } from '@apollo/client';

export const GET_CAREERS = gql`
query { 
	careersList {
            _id
            title
            department
            type
            publishedAt
            summary
      }
}
`;
