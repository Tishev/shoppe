import { Button, Input } from '@mui/material';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import '../Footer/footer.scss';

import React from 'react';
const Form = () => {
  return (
    <div className="footer__content-form">
      <Input
        placeholder="Give an email, get the newsletter."
        sx={{ paddingBottom: '15px', width: '400px', position: 'relative' }}
      />
      <TrendingFlatIcon
        color="action"
        sx={{ cursor: 'pointer', position: 'absolute', right: '20px', top: '4px' }}
      />
    </div>
  );
};

export default Form;
