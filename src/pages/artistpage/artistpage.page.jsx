import React from 'react';
import { useSelector } from 'react-redux';

import Spinner from '../../components/spinner/spinner.component';
import './artistpage.style.scss';

const Artistpage = () => {
  let img = '';
  let summary = '';
  let tags = [];

  const {
    result: { artist },
    isFetching,
    errorMessage,
  } = useSelector(({ data }) => data);

  if (artist) {
    img = artist.image[3]['#text'];
    summary = artist.bio.summary;
    tags = artist.tags.tag;
  }

  return isFetching ? (
    <Spinner />
  ) : errorMessage ? (
    <h2>{errorMessage}</h2>
  ) : (
    <div className="artist">
      {artist && (
        <div className="artist__info">
          <h2 className="artist__name">{artist.name.toUpperCase()}</h2>
          <div className="artist__description">
            <div className="artist__img-wrapper">
              <img src={img} alt="artist img" />
            </div>
            <p className="artist__summary">
              {summary.match(/.+?(?=<a)/).toString()}
            </p>
          </div>
          <div className="artist__tags">
            {tags.map((tag, i) => (
              <span key={i}>{tag.name.toUpperCase()}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Artistpage;
