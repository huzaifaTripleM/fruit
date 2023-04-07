import { gql } from "@apollo/client";

export const Fruits = gql`
  query GetFruits {
    fruits {
      id
      scientific_name
    }
  }
`;

export const Fruit = gql`
  query fruit($id : ID) {
    fruit (id:$id) {
      scientific_name
      tree_name
      fruit_name
    }
  }
`;

export const addFruitMutation = gql`
  mutation addFruit(
    $id: ID!
    $scientific_name: String!
    $tree_name: String!
    $fruit_name: String!
    $family: String!
    $origin: String!
    $description: String!
    $bloom: String!
    $maturation_fruit: String!
    $life_cycle: String!
    $climatic_zone: String!
  ) {
    addFruit(
      id: $id
      scientific_name: $scientific_name
      tree_name: $tree_name
      fruit_name: $fruit_name
      family: $family
      origin: $origin
      description: $description
      bloom: $bloom
      maturation_fruit: $maturation_fruit
      life_cycle: $life_cycle
      climatic_zone: $climatic_zone
    ) {
      id
      scientific_name
      tree_name
      fruit_name
      family
      origin
      description
      bloom
      maturation_fruit
      life_cycle
      climatic_zone
    }
  }
`;

export const updateFruitMutation = gql`
  mutation updateFruit(
    $id: ID!
    $scientific_name: String!
    $tree_name: String!
    $fruit_name: String!
    $family: String!
    $origin: String!
    $description: String!
    $bloom: String!
    $maturation_fruit: String!
    $life_cycle: String!
    $climatic_zone: String!
  ) {
    updateFruit(
      id: $id
      scientific_name: $scientific_name
      tree_name: $tree_name
      fruit_name: $fruit_name
      family: $family
      origin: $origin
      description: $description
      bloom: $bloom
      maturation_fruit: $maturation_fruit
      life_cycle: $life_cycle
      climatic_zone: $climatic_zone
    ) {
      id
      scientific_name
      tree_name
      fruit_name
      family
      origin
      description
      bloom
      maturation_fruit
      life_cycle
      climatic_zone
    }
  }
`;

export const deleteFruitMutation = gql`
  mutation deleteFruit($id: ID!) {
    deleteFruit(id: $id) {
      id
    }
  }
`;
