import { ExclamationIcon } from '@heroicons/react/outline';
import { Trans } from '@lingui/macro';
import { Box, SvgIcon } from '@mui/material';

import { ContentWithTooltip } from '../ContentWithTooltip';
import { Link } from '../primitives/Link';

export const RenFILToolTip = () => {
  return (
    <ContentWithTooltip
      tooltipContent={
        <Box>
          <Trans>
            This asset is frozen due to Plend Protocol decision{' '}
            <Link href={'https://docs.plend.finance'} sx={{ textDecoration: 'underline' }}>
              <Trans>More details</Trans>
            </Link>
          </Trans>
        </Box>
      }
    >
      <SvgIcon sx={{ fontSize: '20px', color: 'error.main', ml: 2 }}>
        <ExclamationIcon />
      </SvgIcon>
    </ContentWithTooltip>
  );
};
