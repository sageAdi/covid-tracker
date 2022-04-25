import * as React from 'react';
import { Card, CardContent, Typography, CardHeader, Avatar, useTheme } from '@mui/material';
import PropTyes from 'prop-types';

export default function SpreadCard({ icon, title, body }) {
  const Icon = icon;
  const theme = useTheme();
  return (
    <Card
      sx={{
        height: '100%',
        backgroundColor: 'rgba(255, 7, 58, 0.1)',
        boxShadow: '0 8px 16px 0 rgba(255, 7, 58, 0.1)',
        backdropFilter: 'blur(2px)',
        borderRadius: '10px',
        border: '1px solid rgba(255, 7, 58, 0.11)'
      }}
      elevation={2}
    >
      <CardHeader
        title={title}
        avatar={
          <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
            <Icon />
          </Avatar>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
}

SpreadCard.propTypes = {
  icon: PropTyes.shape().isRequired,
  title: PropTyes.string.isRequired,
  body: PropTyes.string.isRequired
};
