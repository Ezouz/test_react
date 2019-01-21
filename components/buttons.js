import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = () => (
  <Link to="/">
    <button>MATCHA</button>
  </Link>
);

const ProfileButton = () => (
  <Link to="/profile">
    <button>PROFILE</button>
  </Link>
);

const MatcherButton = () => (
  <Link to="/matcher">
    <button>MATCHER</button>
  </Link>
);

const HistoryButton = () => (
  <Link to="/history">
    <button>HISTORY</button>
  </Link>
);

const StatsButton = () => (
  <Link to="/stats">
    <button>STATS</button>
  </Link>
);

const LoginButton = () => (
  <Link to="/login">
    <button>SIGN IN</button>
  </Link>
);

const RegisterButton = () => (
  <Link to="/register">
    <button>SIGN UP</button>
  </Link>
);

const LogOutButton = () => (
  <Link to="/logout">
    <button>LOG OUT</button>
  </Link>
);

export {
  HomeButton,
  ProfileButton,
  MatcherButton,
  HistoryButton,
  StatsButton,
  LoginButton,
  RegisterButton,
  LogOutButton
};
