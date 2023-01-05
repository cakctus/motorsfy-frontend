import "./style.scss"

const SearchResultModal = ({ children, setVisible, isModal, h, setH }) => {
  const styles = {
    myModal: {
      position: "fixed",
      top: "0",
      bottom: "0",
      right: "0",
      left: "0",
      display: "none",
      background: "rgba(0,0,0,0.3)",
      display: "flex",
      justifyContent: "flex-end",
      overflowY: "scroll",
      // height: "max-content",
    },

    myModalContent: {
      padding: "20px",
      background: "white",
      borderRadius: "5px",
      //   width: "50vw",
      minHeight: `${h}px`,
      width: `50vw`,
      background: "#2E2E2E",
      //   transition: "margin 1s",
      //   animationName: `${isModal ? "example" : ""}`,
      //   animationDuration: "2s",
      //   animationIterationCount: "1",
      //   animationTimingFunction: "easy-out",
      // justifyContent: "flex-end",
      // textAlign: "center",
    },

    myModalActive: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      transition: "width 2s",
    },
  }

  const handlerVisible = () => {
    setVisible(false)
  }

  return (
    <div style={styles.myModal} onClick={handlerVisible}>
      <div style={styles.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default SearchResultModal
