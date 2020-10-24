import React from 'react';
import Box from '@material-ui/core/Box';


export default function Display( props) {
    console.log(props)
  return (
    <div style={{ width: '100%',margin:'20px', border:'1px solid #ccc' }}>
      <Box display="flex" p={1} bgcolor="background.paper">
        {"I'm a flexbox container!"}
      </Box>
    </div>
  );
}