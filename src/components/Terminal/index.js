import React from 'react';

import { ClickAwayListener } from '@material-ui/core';
import Typewriter from 'typewriter-effect';

import { MainContainer, Tab, TabIcons, BodyContainer } from './styles';

const Terminal = ({click, children}) => (
  <ClickAwayListener  onClickAway={click}>
    <MainContainer>
      <Tab>
        <TabIcons onClick={click}>
          <p>X</p>
        </TabIcons>
      </Tab>
      <BodyContainer>
        {children}
      </BodyContainer>
    </MainContainer>
  </ClickAwayListener>
)

export default Terminal;