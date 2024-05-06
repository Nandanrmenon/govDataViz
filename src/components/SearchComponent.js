import React, { useState } from 'react';

function SearchComponent() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    const script = document.createElement('script');
    script.src = `https://data.gov.in/api/datastore/resource.json?q=${query}&callback=handleData`;
    document.body.appendChild(script);

    // Clean up script tag after data is fetched
    script.onload = () => {
      setLoading(false);
      document.body.removeChild(script);
    };
  };

  // Callback function for JSONP response
  window.handleData = (data) => {
    setSearchResults(data);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter search query"
        />
        <button type="submit">Search</button>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Search Results</h2>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result.name}</li> // Adjust this according to the structure of the data from data.gov.in
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchComponent;
