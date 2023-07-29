import { Input, InputProps } from "antd"
import { FC, PropsWithChildren } from "react"
import styles from './InputWithHeaderText.module.css'

const InputWithHeaderText: FC<PropsWithChildren<InputProps & {className?: string}>> = ({children, className, ...otherProps}) => {
  return (
    <div className={`${styles.inputContainer} ${className}`}>
      <p>{children}</p>
      <Input {...otherProps}></Input>
    </div>
  )
}

export default InputWithHeaderText
