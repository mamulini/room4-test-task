import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import {
  searchActivate,
  searchDeactivate,
  fetchDataStartAsync,
} from '../../redux/actions';
import logo from '../../assets/logo.png';
import './header.style.scss';

const Header = () => {
  const active = useSelector(({ data }) => data.searchActive);
  const dispatch = useDispatch();
  const history = useHistory();
  const ref = useRef(null);

  const handleClick = () => {
    dispatch(searchActivate());
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      dispatch(searchDeactivate());
      ref.current.value = '';
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;

    dispatch(
      fetchDataStartAsync(
        `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${value.toLowerCase()}&api_key=04ff2a6abdf41f3d2a7e9deb1da2f0dc&format=json`
      )
    );

    value.length ? history.push('/search') : history.push('/');
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="header">
      <Link className="header__logo-wrapper" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <h1 className="header__title">Find your favorite music</h1>
      <div className="header__search-wrapper">
        <input
          ref={ref}
          className={
            active ? 'header__search-input active' : 'header__search-input'
          }
          type="search"
          aria-label="Search tracks"
          onClick={handleClick}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Header;
