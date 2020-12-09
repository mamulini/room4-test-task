import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchDataStartAsync } from '../../redux/actions';
import Card from '../../components/card/card.component';
import Spinner from '../../components/spinner/spinner.component';
import './homepage.style.scss';

export const Homepage = () => {
  const {
    result: { tracks },
    isFetching,
    errorMessage,
  } = useSelector((state) => state.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchDataStartAsync(
        'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=04ff2a6abdf41f3d2a7e9deb1da2f0dc&limit=20&format=json'
      )
    );
  }, []);

  return isFetching ? (
    <Spinner />
  ) : errorMessage ? (
    <h2 className="error-message">{errorMessage}</h2>
  ) : (
    <div className="homepage">
      <h2 className="homepage__title">Top Tracks</h2>
      <div className="homepage__card-list">
        {tracks &&
          tracks.track.map((item, i) => {
            const { name, url } = item.artist;
            const img = item.image[2]['#text'];
            return (
              <Card
                key={i}
                artist={name}
                track={item.name}
                img={img}
                url={url}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Homepage;
