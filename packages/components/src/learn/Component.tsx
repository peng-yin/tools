/*
  类组件的类型检查
    继承 Component<P, S={}> 或 PureComponent<P, S={}> 泛型类，接收两个参数：
    P：props的类型定义
    S：state的类型定义
*/

import React from 'react';

export interface CounterProps {	// 同样是{ComponentName}Props形式命名
  defaultCount: number; // 可选props, 不需要?修饰
}

/**
 * 组件状态
 */
interface State {
  count: number;
}

/**
 * 继承React.Component, 并声明Props和State类型
 */
 export class Counter extends React.Component<CounterProps, State> {
  /**
   * 默认参数
   */
  public static defaultProps = {
    defaultCount: 0,
  };

  /**
   * 初始化State
   */
  public state = {
    count: this.props.defaultCount,
  };

  /**
   * 声明周期方法
   */
  public componentDidMount() {}

  public componentWillUnmount() {}

  public componentDidCatch() {}

  public componentDidUpdate(prevProps: CounterProps, prevState: State) {}

  /**
   * 渲染函数
   */
  public render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }

  private increment = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  private decrement = () => {
    this.setState(({ count }) => ({ count: count - 1 }));
  };
}

