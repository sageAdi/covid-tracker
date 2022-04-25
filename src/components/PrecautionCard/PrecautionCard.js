import React from 'react';

import { Card, CardContent, Typography, CardHeader, Avatar, useTheme } from '@mui/material';
import PropTyes from 'prop-types';

export default function PrecautionCard({ icon, title, body }) {
  const theme = useTheme();
  return (
    <Card sx={{ height: '100%', bgcolor: theme.palette.green.light }}>
      <CardHeader
        title={title}
        avatar={<Avatar src={icon} alt="cough" sx={{ bgcolor: theme.palette.green.main }} />}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
}

PrecautionCard.propTypes = {
  icon: PropTyes.oneOfType([PropTyes.string, PropTyes.shape()]).isRequired,
  title: PropTyes.string.isRequired,
  body: PropTyes.string.isRequired
};
