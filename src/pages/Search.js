import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

const SEARCH_DRUG = gql`
  query SearchDrug($name: String!) {
    searchDrug(name: $name) {
      id
      name
      price
      stock
    }
  }
`;

const SearchDrug = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { loading, error, data } = useQuery(SEARCH_DRUG, {
    variables: { name: searchTerm },
    skip: !searchTerm, // Avoid making a request when search is empty
  });

  return (
    <div>
      <h2>Search for a Drug</h2>
      <input
        type="text"
        placeholder="Enter drug name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && data.searchDrug.length > 0 ? (
        <ul>
          {data.searchDrug.map((drug) => (
            <li key={drug.id}>
              <strong>{drug.name}</strong> - ₦{drug.price} 
            </li>
          ))}
        </ul>
      ) : searchTerm && !loading ? (
        <p>No drugs found.</p>
      ) : null}
    </div>
  );
};

export default SearchDrug;
