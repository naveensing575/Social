import {Box} from '@mui/material';
import { styled } from '@mui/material/styles';

const FlexBetween = styled(Box)(
  {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1.5rem',
  }
)

export default FlexBetween;