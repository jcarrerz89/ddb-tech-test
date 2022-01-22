import './CareerItemConditions.css';

const CareerItemConditions = ({department, period, publishedAt}) => { 
      return <ul>
            <li><span><img src="/role.svg" /></span><label>{department}</label></li>
            <li><span><img src="/clock.svg" /></span><label>{period}</label></li>
            <li><span><img src="/calendar.svg" /></span><label>{publishedAt}</label></li>
      </ul>
};

export default CareerItemConditions;