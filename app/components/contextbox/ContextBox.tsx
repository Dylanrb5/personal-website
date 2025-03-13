import { ReactNode } from "react";
import styles from "./contextbox.module.css"

interface Props {
    children: ReactNode;
}

const ContextBox = ({children}: Props) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default ContextBox