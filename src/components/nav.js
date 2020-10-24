import React from 'react';
import { TopAppBar, TopAppBarRow,TopAppBarSection,TopAppBarTitle,TopAppBarFixedAdjust } from '@rmwc/top-app-bar';
import {ThemeProvider} from '@rmwc/theme'

const Nav =()=>(
<div>
<ThemeProvider
  options={{
    primary: 'red',
    secondary: 'blue'
  }}
>

  <TopAppBar fixed>
    <TopAppBarRow>
      <TopAppBarSection>
        <TopAppBarTitle>Reddit</TopAppBarTitle>
      </TopAppBarSection>
    </TopAppBarRow>
  </TopAppBar>
  <TopAppBarFixedAdjust />
  </ThemeProvider>

</div>
);

export default Nav