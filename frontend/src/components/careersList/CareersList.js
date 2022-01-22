
import React from 'react';
import './CareersList.css';
import { GET_CAREERS } from '../../graphql/queries';
import { useQuery, gql } from "@apollo/client";
import CareerItem  from './careerItem/CareerItem';

const CareersList = () => {
      const { error, loading, data } = useQuery(GET_CAREERS);
      if (loading) {
            return <p>Loading...</p>;
      }

      if (error) {
            return <p>Error :(</p>;
      }

      return <div>
                  <div className="careers-legend">
                        <p>We're here to do honest, imaginative, 
                              engaging work. <strong>You could be here too.</strong>
                        </p>
                  </div>
                  {data.careersList.map(career => { 
                        return <CareerItem key={career._id} item={career}></CareerItem>
                  })}
            </div>
};

export default CareersList;