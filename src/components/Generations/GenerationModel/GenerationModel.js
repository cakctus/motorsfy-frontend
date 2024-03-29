import "./style.scss"

const GenerationModel = ({ children, setVisible, isModal, h, setH }) => {
  const styles = {
    myModal: {
      position: "fixed",
      top: "0",
      bottom: "0",
      right: "0",
      left: "0",
      display: "none",
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "flex-end",
      overflowY: "scroll",
      zIndex: "999",
      // height: "max-content",
    },

    myModalContent: {
      padding: "20px",
      background: "white",
      borderRadius: "5px",
      width: "40vw",
      minHeight: `${h + 20}px`,
      background: "#2E2E2E",
      // justifyContent: "flex-end",
      // textAlign: "center",
    },

    myModalActive: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
  }

  const handlerVisible = () => {
    setVisible(false)
    // document.body.style.overflow = "auto"
  }

  return (
    <div style={styles.myModal} onClick={handlerVisible}>
      <div style={styles.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default GenerationModel
