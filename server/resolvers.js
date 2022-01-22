const { careers } = require('./careers-data');

exports.resolvers = {
      Query: {
            careersList: () => {
                  // return ['test'];
                  return careers;
            }
      }
}