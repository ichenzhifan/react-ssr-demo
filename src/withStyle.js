import React  from 'react';
import hostStatics from 'hoist-non-react-statics'

export default (Comp, styles) => {
  const NewComp = props => {
    if(props.staticContext){
      props.staticContext.css.push(styles._getCss());
    }

    return <Comp {...props}/>
  }

  // 继承原始组件的静态方法.
  return hostStatics(NewComp, Comp);
}