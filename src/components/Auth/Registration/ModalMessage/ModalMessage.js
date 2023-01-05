import { useState, useEffect } from "react"

const ModalMessage = ({ children, showModal, setShowModal }) => {
  // const [showModal, setShowModal] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false)
    }, 3000)
    return () => clearTimeout(timer)
  })

  return <>{showModal && children}</>
}

export default ModalMessage
