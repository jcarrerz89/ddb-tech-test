import React from 'react';

import './CareerItem.css';
import CareerItemConditions from './../careerItemContitions/CareerItemConditions';

const CareerItem = ({item}) => {
      return <div className="item-container">
                  <div className="row">
                        <h4>{item.title}</h4>
                  </div>
                  <div className="row">
                        <CareerItemConditions department={item.department} period={item.schedule} publishedAt={item.publishedAt}></CareerItemConditions>
                  </div >
                  <div className="row">
                        <p>{item.summary}</p>
                  </div>
            </div>
};

export default CareerItem;