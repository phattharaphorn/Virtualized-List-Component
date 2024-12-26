import React from 'react';
import { FixedSizeList as List } from 'react-window';

const VirtualizedList = () => {
  // สร้างข้อมูลตัวอย่าง 100,000 รายการ
  const items = Array.from({ length: 100000 }, (_, index) => `Item #${index + 1}`);

  // ฟังก์ชันสำหรับเรนเดอร์แต่ละรายการ
  const Row = ({ index, style }) => (
    <div style={style}>
      <p style={{ margin: 0, padding: 10, borderBottom: '1px solid #ccc' }}>
        {items[index]}
      </p>
    </div>
  );

  return (
    <List
      height={1000} // ความสูงของหน้าจอแสดงผล
      itemCount={items.length} // จำนวนรายการทั้งหมด
      itemSize={50} // ความสูงของแต่ละรายการ
      width="100%" // ความกว้าง
    >
      {Row}
    </List>
  );
};

export default VirtualizedList;
