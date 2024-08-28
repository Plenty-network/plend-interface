import { Trans } from '@lingui/macro';
import { Box, CircularProgress, Paper, PaperProps, Typography } from '@mui/material';
import { ReactNode } from 'react';

import FullLogo from '/public/logos/superlend-full-logo.svg';

import MarkedList from './lists/MarkedList';
import MarkedListItem from './lists/MarkedListItem';
import { Link, ROUTES } from './primitives/Link';
import { ConnectWalletButton } from './WalletConnection/ConnectWalletButton';

interface ConnectWalletPaperProps extends PaperProps {
  loading?: boolean;
  description?: ReactNode;
}

export const ConnectWalletPaper = ({
  loading,
  description,
  sx,
  ...rest
}: ConnectWalletPaperProps) => {
  return (
    <Paper
      {...rest}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        flex: 1,
        ...sx,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          backgroundColor: '#FF5B00',
          borderTopLeftRadius: '6px',
          borderTopRightRadius: '6px',
        }}
      >
        <FullLogo style={{ marginBottom: '16px', maxWidth: '250px' }} />
      </Box>
      <Box sx={{ p: 4 }}>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            {description ? (
              <Typography
                sx={{
                  textAlign: 'left',
                  maxWidth: '700px',
                  marginBottom: '50px',
                  padding: '15px 20px',
                }}
              >
                {description}
              </Typography>
            ) : (
              <Disclaimers />
            )}
            <ConnectWalletButton />
          </>
        )}
      </Box>
    </Paper>
  );
};

export const Disclaimers = () => {
  return (
    <Typography
      component="div"
      sx={{
        mb: 6,
        textAlign: 'left',
        maxWidth: '700px',
        marginBottom: '20px',
        padding: '15px 20px',
        borderRadius: '6px',
      }}
    >
      <Trans>
        By using this Site, I have read and agree to the{' '}
        <InnerLink href={ROUTES.termsOfService}>Terms of Service</InnerLink> and{' '}
        <InnerLink href={ROUTES.privacyPolicy}>Privacy Policy</InnerLink>.
        <br />
        <MarkedList markerType="dash" name="disclaimer" sx={{ pt: 8 }}>
          <MarkedListItem>
            I am not the person or entities who reside in, are citizens of, are incorporated in, or
            have a registered office in the United States of America or any Prohibited Localities,
            as defined in the <InnerLink href={ROUTES.termsOfService}>Terms of Service</InnerLink>.
          </MarkedListItem>
          <MarkedListItem>
            I will not in the future access this site while located within the United States or any
            Prohibited Localities, as defined in the{' '}
            <InnerLink href={ROUTES.termsOfService}>Terms of Service</InnerLink>.
          </MarkedListItem>
          <MarkedListItem>
            I am not using, and will not in the future use, a VPN to mask my physical location from
            a restricted territory.
          </MarkedListItem>
          <MarkedListItem>
            I am lawfully permitted to access this site and use it&#39;s services under the laws of
            the jurisdiction in which I reside and am located.
          </MarkedListItem>
          <MarkedListItem>
            I understand the risks associated with entering into using the Superlend.
          </MarkedListItem>
        </MarkedList>
      </Trans>
    </Typography>
  );
};

interface InnerLinkProps {
  children: JSX.Element | string;
  href: string;
}
export const InnerLink = ({ children, href }: InnerLinkProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      sx={() => ({
        color: '#FF5B00',
        textDecoration: 'underline',
      })}
    >
      {children}
    </Link>
  );
};
