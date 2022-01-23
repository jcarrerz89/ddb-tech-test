
import React, { useState } from 'react';
import './CareersList.css';
import { GET_CAREERS } from '../../graphql/queries';
import { useQuery } from "@apollo/client";
import CareerItem  from './careerItem/CareerItem';
import Filters from './filters/Filters';

const CareersList = () => {
      const [department, setDepartment] = useState('');
      const [sortBy, setSortBy] = useState('most recent');

      const onSortBy = (sortBy) => { 
            setSortBy(sortBy);
      }

      const onFilterByDepartment = (department) => { 
            setDepartment(department);
      }

      const { error, loading, data } = useQuery(GET_CAREERS, {
            variables: {
                  department: department, 
                  sortBy: sortBy
            }
      });

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
                  <Filters onSortBy={onSortBy} onFilterByDepartment={onFilterByDepartment} department={department} sortedBy={sortBy}></Filters>
                  {data.careersList.map(career => { 
                        return <CareerItem key={career._id} item={career}></CareerItem>
                  })}
            </div>
};

export default CareersList;