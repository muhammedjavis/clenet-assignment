import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import { NavLink, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../store/ContrastContext';

function Header({ sections }) {
  const activeColor = '#ADD8E6';
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width:600px)');
  const [anchorEl, setAnchorEl] = useState(null);
  const { isHighContrast, toggleContrast } = useContext(ThemeContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <Button
          size='small'
          variant='contained'
          color={isHighContrast ? 'warning' : 'secondary'}
          onClick={toggleContrast}
        >
          High/Low Contrast
        </Button>
        <Button
          variant='contained'
          color={isHighContrast ? 'warning' : 'secondary'}
          size='small'
          onClick={handleClick}
        >
          <NavLink
            to='/login'
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Login
          </NavLink>
        </Button>
      </Toolbar>
      <Toolbar component='nav' variant='dense'>
        {isMobile ? (
          <div>
            <Button
              aria-controls='nav-menu'
              aria-haspopup='true'
              onClick={handleClick}
              size='small'
            >
              Pages
            </Button>
            <Menu
              id='nav-menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {sections.map((section) => (
                <NavLink
                  key={section.title}
                  to={section.url}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  onClick={handleClose}
                >
                  <MenuItem onClick={handleClose}>{section.title}</MenuItem>
                </NavLink>
              ))}
            </Menu>
          </div>
        ) : (
          sections.map((section) => {
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
          })
        )}
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
