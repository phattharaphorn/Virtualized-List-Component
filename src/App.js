import React from 'react';
import { FixedSizeList as List } from 'react-window';

const VirtualizedList = () => {

  const items = Array.from({ length: 100000 }, (_, index) => `Item #${ index + 1 }`);

  const Row = ({ index, style }) => (
    <div style={style}>
      <p style={{ margin: 0, padding: 10, borderBottom: '1px solid #ccc' }}>
        {items[index]}
      </p>
    </div>
  );

  return (
    <List
      height={1000} 
      itemCount={items.length} 
      itemSize={50} 
      width="100%" 
    >
      {Row}
    </List>
  );
};

export default VirtualizedList;
