import SearchForm from "../../components/SearchForm/SearchForm"
import MainList from "../../components/MainList/MainList"
const Main = () => {
  return (
    <>
      <div className="search-container">
        <SearchForm />
      </div>
      <div className="main-list-category">
        <MainList />
      </div>
    </>
  )
}

export default Main
