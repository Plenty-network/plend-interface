import { InformationCircleIcon } from '@heroicons/react/outline';
import { Trans } from '@lingui/macro';
import {
  Button,
  Slide,
  SvgIcon,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { ContentWithTooltip } from 'src/components/ContentWithTooltip';
import { ENABLE_TESTNET } from 'src/utils/marketsAndNetworksConfig';

import { Link } from '../components/primitives/Link';
import { uiConfig } from '../uiConfig';
import { NavItems } from './components/NavItems';
import { MobileMenu } from './MobileMenu';
import { SettingsMenu } from './SettingsMenu';
import WalletWidget from './WalletWidget';
import { toggleMode } from 'src/helpers/toggle-mode';
import { useWeb3Context } from 'src/libs/hooks/useWeb3Context';
import { ChainId } from 'src/ui-config/networksConfig';

interface Props {
  children: React.ReactElement;
}

function HideOnScroll({ children }: Props) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export function AppHeader() {
  const { breakpoints } = useTheme();
  const md = useMediaQuery(breakpoints.down('md'));
  const sm = useMediaQuery(breakpoints.down('sm'));
  const { switchNetwork } = useWeb3Context();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [walletWidgetOpen, setWalletWidgetOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen && !md) {
      setMobileMenuOpen(false);
    }
    if (walletWidgetOpen) {
      setWalletWidgetOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [md]);

  const headerHeight = 80;

  function handleToggleMode() {
    handleSwitchNetwork();
  }

  const handleSwitchNetwork = () => {
    const isTestnetEnabled = localStorage.getItem('testnetsEnabled') === 'true';
    const newChainId = isTestnetEnabled ? ChainId.etherlink : ChainId.etherlink_testnet;

    switchNetwork(newChainId)
      .then(toggleMode)
      .catch(err => console.log('Switch network error => ', `"${err.message}"`));
  };

  const testnetTooltip = (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: 1 }}>
      <Typography variant="subheader1">
        {ENABLE_TESTNET && <Trans>Testnet mode is ON</Trans>}
        {!ENABLE_TESTNET && <Trans>Testnet mode is OFF</Trans>}
      </Typography>
      <Typography variant="description">
        {ENABLE_TESTNET &&
          <Trans>The app is running in testnet mode. Learn how it works in</Trans>
        }
        {!ENABLE_TESTNET &&
          <Trans>The app is running in mainnet mode. Learn how it works in</Trans>
        }
        <Link
          href="https://docs.superlend.xyz"
          style={{ fontSize: '14px', fontWeight: 400, textDecoration: 'underline', marginLeft: '5px' }}
        >
          FAQ.
        </Link>
      </Typography>
      <Button variant="outlined" sx={{ mt: '12px' }} onClick={handleToggleMode}>
        {ENABLE_TESTNET && <Trans>Disable testnet</Trans>}
        {!ENABLE_TESTNET && <Trans>Enable testnet</Trans>}
      </Button>
    </Box>
  );

  return (
    <HideOnScroll>
      <Box
        component="header"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        sx={(theme) => ({
          height: headerHeight,
          position: 'sticky',
          top: 0,
          transition: theme.transitions.create('top'),
          zIndex: theme.zIndex.appBar,
          background: theme.palette.background.navbar,
          padding: {
            xs: mobileMenuOpen || walletWidgetOpen ? '8px 20px' : '8px 8px 8px 20px',
            xsm: '8px 20px',
          },
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'space-between',
        })}
      >
        <Box
          component={Link}
          href="/"
          aria-label="Go to homepage"
          sx={{
            lineHeight: 0,
            mr: 5,
            transition: '0.3s ease all',
            '&:hover': { opacity: 0.7 },
            height: sm ? 25 : 30,
            width: sm ? 25 : 30
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <img src={uiConfig.appLogo} alt="An SVG of the Superlend logo" height="100%" width="100%" />
        </Box>
        <Box sx={{ mr: sm ? 1 : 3 }}>
          <ContentWithTooltip tooltipContent={testnetTooltip} offset={[0, -4]} withoutHover>
            <Button
              variant="surface"
              size="small"
              color="primary"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                '&:hover, &.Mui-focusVisible': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
              }}
            >
              {ENABLE_TESTNET ? "TESTNET" : "MAINNET"}
              <SvgIcon sx={{ marginLeft: '2px', fontSize: '16px' }}>
                <InformationCircleIcon />
              </SvgIcon>
            </Button>
          </ContentWithTooltip>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <NavItems />
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {!mobileMenuOpen && (
          <WalletWidget
            open={walletWidgetOpen}
            setOpen={setWalletWidgetOpen}
            headerHeight={headerHeight}
          />
        )}

        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <SettingsMenu />
        </Box>

        {!walletWidgetOpen && (
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <MobileMenu
              open={mobileMenuOpen}
              setOpen={setMobileMenuOpen}
              headerHeight={headerHeight}
            />
          </Box>
        )}
      </Box>
    </HideOnScroll>
  );
}
