import React from 'react';

import './Name.css';

const Name = (props) => (
  <div className={'name ' + (props.type ? props.type : '')}>{props.name}</div>
)


export default Name;