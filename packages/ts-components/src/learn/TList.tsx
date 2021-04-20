import React, { Component } from 'react';


// 泛型函数组件
export interface ListProps<T> {
  list:T[]
  renderItem: (item: I, index: number) => React.ReactNode
}

export function List<T>(props: ListProps<T>) {
  return (
    <>
      {props.list.map(props.renderItem)}
    </>
  )
}

export function ListCard() {
  return (
    <List
      list={[1,2,3]}
      renderItem={i => (
        <p>{i}</p>
      )}
    />
  )
}


/*
  泛型组件
  与函数组件的泛型组件类似，如：
*/

export class List<T> extends React.Component<ListProps<T>> {
  public render() {}
}