import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchDataStartAsync } from '../../redux/actions';
import './card.style.scss';

const Card = ({ artist, track, img, url }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      {img && (
        <div className="card__img-wrapper">
          <img src={img} alt="artist-image" />
        </div>
      )}
      <div className="card__details">
        <h3 className="card__track">
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/musical-notes.png"
            alt="icon"
          />
          {track.toUpperCase()}
        </h3>
        <Link
          className="card__artist"
          to="/artist"
          onClick={() =>
            dispatch(
              fetchDataStartAsync(
                `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=04ff2a6abdf41f3d2a7e9deb1da2f0dc&format=json`
              )
            )
          }
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/micro.png"
            alt="icon"
          />
          {artist}
        </Link>
        {url && (
          <a
            className="card__link"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open on Last.fm
          </a>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  artist: PropTypes.string,
  track: PropTypes.string,
  img: PropTypes.string,
  url: PropTypes.string,
};

export default Card;
