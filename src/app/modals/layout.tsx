import { ReactNode } from 'react'

interface ModalLayoutProps {
  modal: ReactNode
  children: ReactNode
}

export default function ModalLayout({ modal, children }: ModalLayoutProps) {
  return (
    <>
      {children}
      {modal}
    </>
  )
}
