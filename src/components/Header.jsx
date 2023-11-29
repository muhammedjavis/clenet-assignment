import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import Link from '@mui/material/Link';
import { NavLink, useLocation } from 'react-router-dom';

function Header({ sections }) {
  const activeColor = '#ADD8E6';
  const location = useLocation();

  return (
    <>
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button size='small'>High Contrast</Button>

        <Button variant='contained' size='small'>
          <NavLink
            to='/login'
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Login
          </NavLink>
        </Button>
      </Toolbar>
      <Toolbar component='nav' variant='dense'>
        {sections.map((section) => {
          const isActive = location.pathname === section.url;

          return (
            <Link
              color='inherit'
              key={section.title}
              variant='body2'
              href={section.url}
              underline='none'
              sx={{
                p: 1,
                flexShrink: 0,
                textDecoration: 'none',
                fontWeight: 'bold',
                color: isActive ? activeColor : 'inherit',
                whiteSpace: 'nowrap',
                '&:hover': {
                  color: activeColor,
                },
              }}
            >
              {section.title}
            </Link>
          );
        })}
      </Toolbar>
    </>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Header;
