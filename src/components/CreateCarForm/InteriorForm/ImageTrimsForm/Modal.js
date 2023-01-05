const styles = {
  myModal: {
    position: "fixed",
    top: "0",
    bottom: "0",
    right: "0",
    left: "0",
    display: "none",
    background: "rgb(90, 90, 90, 0.5)",
    display: "block",
    margin: "0 auto",
    justifyContent: "center",
    alignItems: "center",
    overflowY: "scroll",
  },

  myModalActive: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  myModalContent: {
    padding: "20px",
    background: "white",
    borderRadius: "5px",
    justifyContent: "center",
    // textAlign: "center",
    height: "auto",
    width: "80%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
  },
}

const Modal = ({ children, setVisible, listOfInteriorTrim }) => {
  return (
    <div style={styles.myModal} onClick={() => setVisible(false)}>
      <div style={styles.myModalContent} onClick={(e) => e.stopPropagation()}>
        <div style={styles.contentItem}>{children}</div>
        <div style={styles.contentItem}>
          {listOfInteriorTrim.map((item) => {
            return (
              <>
                <img src={item.interior} width="100" />
                <img src={item.exterior} alt="" width="400" />
                <br />
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Modal
