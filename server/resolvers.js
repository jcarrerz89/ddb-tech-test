const { careers } = require('./careers-data');
const _ = require('lodash');

exports.resolvers = {
      Query: {
            careersList(parent, args, info) {
                  const {department, sortBy} = args;

                  let careersFiltered = _.isUndefined(department) || _.isEmpty(department) ?
                        careers : _.filter(careers, (career) => {
                              return career.department.toUpperCase() === department.toUpperCase();
                          });

                  const orderType = _.isUndefined(sortBy) || sortBy === 'most recent' ? 
                          'desc' : 'asc';

                  return _.orderBy(careersFiltered, 'publishedAt', orderType);
            }
      }
}