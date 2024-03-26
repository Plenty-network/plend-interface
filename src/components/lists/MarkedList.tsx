import { styled, SxProps, Theme } from '@mui/material';
import { ReactNode } from 'react';

const markers: Record<string, string> = {
  'lower-roman': `'(' counter(listName, lower-roman) ')'`,
  'lower-alpha': `'(' counter(listName, lower-alpha) ')'`,
  disc: `counter(listName, disc)`,
  decimal: `counter(listName, decimal)'.'`,
  dash: `'-'`,
};

const getMarker = (name: string, type: string) => {
  const marker = markers[type];
  return marker.replace('listName', name);
};

const StyledList = styled('ol')<MarkedListProps>(({ markerType, name }) => ({
  margin: 0,
  counterReset: name,
  '& li::marker': {
    content: getMarker(name, markerType),
  },
  '& li': {
    counterIncrement: name,
  },
}));

type MarkedListProps = {
  children: ReactNode;
  markerType: 'lower-roman' | 'lower-alpha' | 'disc' | 'decimal' | 'dash';
  name: string;
  sx?: SxProps<Theme>;
};

const MarkedList = ({ children, markerType, name, sx }: MarkedListProps): JSX.Element => {
  return (
    <StyledList sx={sx} markerType={markerType} name={name}>
      {children}
    </StyledList>
  );
};

export default MarkedList;
