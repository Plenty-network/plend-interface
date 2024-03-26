import { styled, SxProps, Theme, Typography } from '@mui/material';
import { ReactNode } from 'react';

const StyledListItem = styled('li')`
  list-style: none;
  padding-left: 1rem;
  :not(:last-child) {
    margin-bottom: 0.25rem;
  }
`;

type MarkedListItemProps = {
  children: ReactNode;
  disableTypography?: boolean;
  sx?: SxProps<Theme>;
};

const MarkedListItem = ({
  children,
  disableTypography = false,
  sx,
}: MarkedListItemProps): JSX.Element => {
  return (
    <StyledListItem sx={sx}>
      {disableTypography && children}
      {!disableTypography && <Typography>{children}</Typography>}
    </StyledListItem>
  );
};

export default MarkedListItem;
