import { styled, ToggleButtonGroup, ToggleButtonGroupProps } from '@mui/material';

const CustomToggleGroup = styled(ToggleButtonGroup)<ToggleButtonGroupProps>({
  backgroundColor: '#27212F',
  border: '1px solid #27212FC0',
  padding: '4px',
}) as typeof ToggleButtonGroup;

export default function StyledToggleGroup(props: ToggleButtonGroupProps) {
  return <CustomToggleGroup {...props} />;
}
