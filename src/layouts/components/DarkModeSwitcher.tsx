import { Trans } from '@lingui/macro';
import {
  Box,
  FormControlLabel,
  ListItem,
  ListItemText,
  MenuItem,
  Switch,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';

import { ColorModeContext } from '../AppGlobalStyles';

interface DarkModeSwitcherProps {
  component?: typeof MenuItem | typeof ListItem;
}

export const DarkModeSwitcher = ({ component = ListItem }: DarkModeSwitcherProps) => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box
      component={component}
      onClick={colorMode.toggleColorMode}
      sx={{
        color: { xs: 'text.primary' },
        py: { xs: 1.5, md: 2 },
      }}
    >
      <ListItemText sx={{ fontFamily: theme.palette.fonts.header, fontWeight: 500 }}>
        <Trans>Dark mode</Trans>
      </ListItemText>
      <FormControlLabel
        sx={{ mr: 0 }}
        value="darkmode"
        control={
          <Switch
            disableRipple
            checked={theme.palette.mode === 'dark'}
            sx={{ '.MuiSwitch-track': { bgcolor: { xs: '#FFFFFF1F', md: 'primary.light' } } }}
          />
        }
        label={
          <Typography fontFamily={theme.palette.fonts.header}>
            {theme.palette.mode === 'dark' ? 'On' : 'Off'}
          </Typography>
        }
        labelPlacement="start"
      />
    </Box>
  );
};
