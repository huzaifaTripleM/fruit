import { gql } from "@apollo/client";



export const getUsers = gql`
  query Query {
  getUsers {
    _id
    createDate
    password
    roles
    userInfo {
      company
      email
      firstName
      lastName
      phone
    }
  }
}
`;


export const getUser  = gql`
query getUser ($email: String!) {
    getUser(email: $email) {
    _id
    createDate
    password
    roles
    userInfo {
      company
      email
      firstName
      lastName
      phone
    }
  }


}
`;


export const getUserByRoles = gql`
query Query($role: Roles) {
  getUsersByRole(role: $role) {
    userInfo {
      lastName
      firstName
      email
    }
    _id
  }
}

`;
