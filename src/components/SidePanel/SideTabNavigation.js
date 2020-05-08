import React, { useState } from 'react';

const SideTabNavigation = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
    
    </div>
  );
}

export default SideTabNavigation