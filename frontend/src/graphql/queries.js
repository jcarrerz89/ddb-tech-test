import { gql } from '@apollo/client';

export const GET_CAREERS = gql`
query($department: String, $sortBy: String) { 
	careersList(department: $department, sortBy: $sortBy) {
            _id
            title
            department
            schedule
            publishedAt
            summary
      }
}
`;
