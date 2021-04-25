import React from 'react'

// 子组件声明  -> 使用Parent.Child形式的 JSX 可以让节点父子关系更加直观, 它类似于一种命名空间的机制，可以避免命名冲突
export interface LayoutProps {}
export interface LayoutHeaderProps {} // 采用ParentChildProps形式命名
export interface LayoutFooterProps {}

export function Layout(props: PropsWithChildren<LayoutProps>) {
  return <div className="layout">{props.children}</div>;
}

// 作为父组件的属性
Layout.Header = (props: PropsWithChildren<LayoutHeaderProps>) => {
  return <div className="header">{props.children}</div>;
};

Layout.Footer = (props: PropsWithChildren<LayoutFooterProps>) => {
  return <div className="footer">{props.children}</div>;
};

function TestLayout () {
  return (<Layout>
    <Layout.Header>header</Layout.Header>
    <Layout.Footer>footer</Layout.Footer>
  </Layout>)
}

/*
  子组件声明
  类组件可以使用静态属性形式声明子组件，如：
*/
export class Layout extends React.Component<LayoutProps> {

  public static Header = Header;
  public static Footer = Footer;

  public render() {
    return <div className="layout">{this.props.children}</div>;
  }
}
