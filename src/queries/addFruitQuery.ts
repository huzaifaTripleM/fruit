import { gql } from "@apollo/client";


export const addFruitQuery = gql`
{
    fruits{
        id
        scientific_name
    }
}
`


