import { gql } from "@apollo/client"

export const ALL_PICTURE_QUERY = gql`
  query allPictures($paginated: Paginated, $filter: FilterPicture) {
    allPictures(paginated: $paginated, filter: $filter) {
      pageInfo {
        total
        currentPage
        perPage
        hasPreviousPage
        hasNextPage
      }
      pictures {
        _id
        name
        description
        status
        price
        simbol
        img
        createdAt
        updatedAt
      }
    }
  }
`

export const GET_PICTURE = gql`
  query getPicture($id: ID!) {
    getPicture(input: { id: $id }) {
      _id
      name
      description
      status
    }
  }
`

export const ADD_TO_CART = gql`
  mutation addToCart($input: InputAddToCart!) {
    addToCart(input: $input) {
      type
      productSummary {
        _id
        name
        description
        price
        img
        simbol
        createdAt
        updatedAt
      }
      quantity
      createdAt
      updatedAt
      productId
    }
  }
`
