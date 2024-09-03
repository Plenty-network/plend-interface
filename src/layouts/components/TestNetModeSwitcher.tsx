import { Trans } from '@lingui/macro';
import { Box, FormControlLabel, ListItem, ListItemText, MenuItem, Switch } from '@mui/material';
import React, { useState } from 'react';
import { toggleMode } from 'src/helpers/toggle-mode';
import { useWeb3Context } from 'src/libs/hooks/useWeb3Context';
import { ChainId } from 'src/ui-config/networksConfig';

interface TestNetModeSwitcherProps {
  component?: typeof MenuItem | typeof ListItem;
}

export const TestNetModeSwitcher = ({ component = ListItem }: TestNetModeSwitcherProps) => {
  const [testnetEnabled] = useState(localStorage.getItem("testnetsEnabled") === 'true');
  const { switchNetwork } = useWeb3Context();

  function handleToggleMode() {
    handleSwitchNetwork();
  }

  const handleSwitchNetwork = () => {
    const newChainId = testnetEnabled ? ChainId.etherlink : ChainId.etherlink_testnet;

    switchNetwork(newChainId)
      .then(toggleMode)
      .catch(err => console.log('Switch network error => ', `"${err.message}"`));
  };

  return (
    <Box
      component={component}
      onClick={handleToggleMode}
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
    </Box>
  );
};
