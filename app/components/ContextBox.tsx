import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const ContextBox = ({children}: Props) => {
  return (
    <div className="context-box context-1">{children}</div>
  )
}

export default ContextBox