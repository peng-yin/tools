
import React, { useState, useImperativeHandle, FC, useRef, useCallback } from "react";
import { Modal } from 'antd'

/*

  Forwarding Refs
    React.forwardRef 在 16.3 新增, 可以用于转发 ref，适用于 HOC 和函数组件。其暴露方法可以使用 ComponentName|Methods的命名规则
*/

export interface MyModalProps {
  title?: React.ReactNode;
  onOk?: () => void;
  onCancel?: () => void;
}

export interface MyModalMethods {
  show(): void;
}

export const MyModal = React.forwardRef<MyModalMethods, MyModalProps>((props, ref) => {
  const [visible, setVisible] = useState();

  // 初始化ref暴露的方法
  useImperativeHandle(ref, () => ({
    show: () => setVisible(true),
  }));

  return <Modal visible={visible}>...</Modal>;
});

const TestModal:FC<{}> = props => {
  const modal = useRef<MyModalMethods | null>(null)
  const confirm = useCallback(() => {
    if(modal.current) {
      modal.current.show()
    }
  })
  const handleOk = useCallback(() => {}, []);

  return (
    <div>
      <button onClick={confirm}>show</button>
      <MyModal ref={modal} onOk={handleOk} />
    </div>
  );
};