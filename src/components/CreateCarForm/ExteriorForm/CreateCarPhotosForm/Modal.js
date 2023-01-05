import "./styles.scss"

const styles = {
  myModal: {
    position: "fixed",
    top: "0",
    bottom: "0",
    right: "0",
    left: "0",
    display: "none",
    background: "rgb(90, 90, 90, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflowY: "scroll",
  },

  //   myModalActive: {
  //     display: "flex",
  //     flexDirection: "row",
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },

  myModalContent: {
    padding: "20px",
    background: "white",
    borderRadius: "5px",
    justifyContent: "center",
    // textAlign: "center",
    height: "90%",
    width: "80%",
    display: "flex",
    flexDirection: "row",
    overflowY: "hidden",
    overflowY: "scroll",
  },

  contentItem: {},
}

const Modal = ({ children, setVisible }) => {
  return (
    <div style={styles.myModal} onClick={() => setVisible(false)}>
      <div style={styles.myModalContent} onClick={(e) => e.stopPropagation()}>
        <div style={styles.contentItem}>{children}</div>
      </div>
    </div>
  )
}

export default Modal
