import * as React from 'react';
import { Avatar, Card, CardContent, CardHeader, Typography, useTheme } from '@mui/material';
import PropTyes from 'prop-types';

export default function SymptomCard({ icon, title, body }) {
  const theme = useTheme();
  console.log(icon);
  // const Icon = icon;
  return (
    <Card
      sx={{
        height: '100%',
        bgcolor: theme.palette.blue.light,
        boxShadow: `0 8px 16px 0 ${theme.palette.blue.light}`,
        backdropFilter: 'blur(2px)',
        borderRadius: '10px',
        border: `1px solid ${theme.palette.blue.light}`
      }}
    >
      <CardHeader title={title} avatar={<Avatar src={icon} alt="symptoms" />} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
}

SymptomCard.propTypes = {
  icon: PropTyes.oneOfType([PropTyes.string, PropTyes.shape()]).isRequired,
  title: PropTyes.string.isRequired,
  body: PropTyes.string.isRequired
};
