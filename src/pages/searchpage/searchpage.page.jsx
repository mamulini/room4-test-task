import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../../components/card/card.component';
import './searchpage.style.scss';

const Searchpage = () => {
  const searchResult = useSelector(({ data }) => data.result.results);
  let tracks = [];
  if (searchResult) tracks = searchResult.trackmatches.track;

  return (
    <div className="search">
      <h2 className="search__title">Search Result</h2>
      <div className="search__result-list">
        {tracks.length ? (
          tracks.map((track, i) => (
            <Card key={i} track={track.name} artist={track.artist} />
          ))
        ) : (
          <div className="search__error">There is no track with this name!</div>
        )}
      </div>
    </div>
  );
};

export default Searchpage;
