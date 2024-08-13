import { CogIcon } from '@heroicons/react/solid';
import { Trans } from '@lingui/macro';
import { Button, Menu, MenuItem, SvgIcon, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { PROD_ENV } from 'src/utils/marketsAndNetworksConfig';

import { DarkModeSwitcher } from './components/DarkModeSwitcher';
import { LanguageListItem, LanguagesList } from './components/LanguageSwitcher';
import { TestNetModeSwitcher } from './components/TestNetModeSwitcher';

export function SettingsMenu() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [languagesOpen, setLanguagesOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const { palette } = useTheme();

  const handleSettingsClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
    setSettingsOpen(true);
    setLanguagesOpen(false);
  };

  const handleLanguageClick = () => {
    setSettingsOpen(false);
    setLanguagesOpen(true);
  };

  const handleCloseLanguage = () => {
    setSettingsOpen(true);
    setLanguagesOpen(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSettingsOpen(false);
    setLanguagesOpen(false);
  };

  return (
    <>
      <Button
        // variant="outlined"
        aria-label="settings"
        id="settings-button"
        aria-controls={settingsOpen ? 'settings-menu' : undefined}
        aria-expanded={settingsOpen ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleSettingsClick}
        sx={{ p: '7px 8px', minWidth: 'unset', ml: 2, background: "rgba(235, 235, 237, 0.20)" }}
      >
        <SvgIcon sx={{ color: '#F1F1F3' }} fontSize="small">
          <CogIcon />
        </SvgIcon>
      </Button>

      <Menu
        id="settings-menu"
        MenuListProps={{
          'aria-labelledby': 'settings-button',
        }}
        anchorEl={anchorEl}
        open={settingsOpen}
        onClose={handleClose}
        sx={{ '.MuiMenuItem-root.Mui-disabled': { opacity: 1 }, '.MuiList-root.MuiMenu-list': { background: palette.mode === 'dark' ? "#0F244B" : "#f1f1f1" } }}
        keepMounted={true}
      >
        <MenuItem disabled sx={{ mb: '4px' }}>
          <Typography variant="subheader2" color="text.secondary" fontFamily={palette.fonts.header}>
            <Trans>Global settings</Trans>
          </Typography>
        </MenuItem>

        <DarkModeSwitcher component={MenuItem} />
        {PROD_ENV && <TestNetModeSwitcher />}
        <LanguageListItem onClick={handleLanguageClick} component={MenuItem} />
      </Menu>

      <Menu
        id="settings-menu"
        MenuListProps={{
          'aria-labelledby': 'settings-button',
        }}
        anchorEl={anchorEl}
        open={languagesOpen}
        onClose={handleClose}
        keepMounted={true}
        sx={{ '.MuiList-root.MuiMenu-list': { background: palette.mode === 'dark' ? "#0F244B" : "#f1f1f1" } }}
      >
        <LanguagesList onClick={handleCloseLanguage} component={MenuItem} />
      </Menu>
    </>
  );
}
