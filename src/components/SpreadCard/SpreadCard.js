import * as React from 'react';
import { Card, CardContent, Typography, CardHeader, Avatar, useTheme } from '@mui/material';
import PropTyes from 'prop-types';

export default function SpreadCard({ icon, title, body }) {
  const Icon = icon;
  const theme = useTheme();
  return (
    <Card
      sx={{
        maxWidth: '400px',
        height: '100%',
        maxHeight: '400px',
        overflow: 'hidden',
        backgroundColor: 'rgba(255, 7, 58, 0.1)'
      }}
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
