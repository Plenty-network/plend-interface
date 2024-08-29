import { DotsHorizontalIcon } from '@heroicons/react/solid';
import { Trans } from '@lingui/macro';
import { useLingui } from '@lingui/react';
import { Button, ListItemIcon, ListItemText, SvgIcon, useTheme } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { useWeb3Context } from 'src/libs/hooks/useWeb3Context';

import { Link } from '../components/primitives/Link';
import { moreNavigation } from '../ui-config/menu-items';

export function MoreMenu() {
  const { i18n } = useLingui();
  const { currentAccount: walletAddress } = useWeb3Context();
  const { palette } = useTheme();

  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-label="more"
        id="more-button"
        aria-controls={open ? 'more-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{
          color: '#FFFFFF',
          minWidth: 'unset',
          p: '6px 8px',
          fontFamily: palette.fonts.header,
          fontWeight: 400,
          '&:hover': {
            color: '#F1FF52',
          },
        }}
      >
        <Trans>More</Trans>
        <SvgIcon color="inherit" sx={{ ml: 1 }}>
          <DotsHorizontalIcon />
        </SvgIcon>
      </Button>

      <Menu
        id="more-menu"
        MenuListProps={{
          'aria-labelledby': 'more-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        keepMounted={true}
        // sx={{'.MuiList-root.MuiMenu-list': { background: "#0F244B" }}}
      >
        {moreNavigation.map((item, index) => (
          <MenuItem
            component={Link}
            href={item.makeLink ? item.makeLink(walletAddress) : item.link}
            key={index}
          >
            <ListItemIcon>
              <SvgIcon sx={{ fontSize: '20px' }}>{item.icon}</SvgIcon>
            </ListItemIcon>
            <ListItemText sx={{ fontFamily: palette.fonts.header, fontWeight: 500 }}>
              {i18n._(item.title)}
            </ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
