import React from 'react'
import { Menu, MenuList } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SettingsIcon from '@mui/icons-material/Settings';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import BaseMenuItem from './baseMenuItem';

const menu = [
  {
    icon: <SettingsIcon />,
    content: 'Option',
    underline: true
  },
  {
    icon: <ModeNightIcon />,
    content: 'Sleep',
    underline: false
  },
  {
    icon: <PowerSettingsNewIcon />,
    content: 'Shut down',
    underline: false
  },
  {
    icon: <RestartAltIcon />,
    content: 'Restart',
    underline: false
  },
]

const BaseMenuList = ({ anchorEl, open, handleClose }) => {

  const MenuListStyle = {
    ">.MuiPaper-root": {
      background: 'rgba(50,50,50,1) 12%',
      color: '#fff',
      ">.MuiList-root": {
        padding: 0,
      }
    },
  }

  return (
    <Menu
      sx={MenuListStyle}
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuList>
        {
          menu.map((item) => {
            return (
              <BaseMenuItem {...item} />
            )
          })
        }
      </MenuList>
    </Menu>
  )
}

export default BaseMenuList