import { Trans } from '@lingui/macro';
import { Box, FormControlLabel, ListItem, ListItemText, MenuItem, Switch } from '@mui/material';
import React, { useState } from 'react';
import WarningSnackbar from 'src/components/primitives/WarningSnackbar';
import { toggleMode } from 'src/helpers/toggle-mode';
import useSnackbar from 'src/hooks/useSnackbar';
import { useWeb3Context } from 'src/libs/hooks/useWeb3Context';
import { ChainId } from 'src/ui-config/networksConfig';


interface TestNetModeSwitcherProps {
  component?: typeof MenuItem | typeof ListItem;
}

export const TestNetModeSwitcher = ({ component = ListItem }: TestNetModeSwitcherProps) => {
  const testnetEnabled = localStorage.getItem("testnetsEnabled") === 'true';
  const { snackbar, handleCloseSnackbar, handleOpenSnackbar } = useSnackbar();
  const { switchNetwork } = useWeb3Context();

  const handleNetworkSwitch = () => {
    const newChainId = testnetEnabled ? ChainId.etherlink : ChainId.etherlink_testnet;

    switchNetwork(newChainId)
      .then(toggleMode)
      .catch(err => {
        console.log('Switch network error => ', `"${err.message}"`)
        if (err.code.toString() === "-32002") {
          handleOpenSnackbar({
            message: "Resolve any pending requests from your wallet or try again!"
          });
        }
      });
  };

  return (
    <Box
      component={component}
      onClick={handleNetworkSwitch}
      sx={{
        cursor: 'pointer',
        color: { xs: 'text.primary' },
        py: { xs: 1.5, md: 2 },
      }}
    >
      <ListItemText>
        <Trans>Testnet mode</Trans>
      </ListItemText>
      <FormControlLabel
        sx={{ mr: 0 }}
        value="testnetsMode"
        control={
          <Switch
            disableRipple
            checked={testnetEnabled}
            sx={{ '.MuiSwitch-track': { bgcolor: { xs: '#FFFFFF1F', md: 'primary.light' } } }}
          />
        }
        label={testnetEnabled ? 'On' : 'Off'}
        labelPlacement="start"
      />
      <WarningSnackbar snackbar={snackbar} handleCloseSnackbar={handleCloseSnackbar} />
    </Box>
  );
};
