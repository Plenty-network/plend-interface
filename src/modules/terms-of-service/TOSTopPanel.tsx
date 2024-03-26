import { Trans } from '@lingui/macro';
import { Box } from '@mui/material';
import { PageTitle } from 'src/components/TopInfoPanel/PageTitle';
import { TopInfoPanel } from 'src/components/TopInfoPanel/TopInfoPanel';

const TOSTopPanel = (): JSX.Element => {
  return (
    <TopInfoPanel
      titleComponent={
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <PageTitle pageTitle={<Trans>Terms of Service</Trans>} withMarketSwitcher={false} />
        </Box>
      }
    />
  );
};

export default TOSTopPanel;
