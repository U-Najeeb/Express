const {buildSchema} = require("graphql")
const Schema = buildSchema(`
type Tour {
    name : String!
    rating : Float!
    price : Float!
}
type Query {
    getTours: [Tour]
  }
  type Mutation {
    addTour(tour: TourInput!): Tour
  }

  input TourInput {
    name: String!
    rating: Float!
    price: Float!
  }
`)

module.exports = Schema