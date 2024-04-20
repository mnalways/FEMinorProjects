import React from 'react'
import Style from "./Box.module.scss";

interface Props {
    measure?: string;
    value?: number;
}
const Box = ({measure = 'Measure', value = 0}: Props) => {
  return (
    <div className={Style.box}>
        <div>{measure}</div>
        <div>{value}</div>
    </div>
  )
}

export default Box