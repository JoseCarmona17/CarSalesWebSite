import CarList from "../components/CarList"
import FilterBar from "../components/FilterBar"

export const Search = () => {
  return (
    <div>
        <FilterBar />
        <div>
            <CarList />
        </div>
    </div>
  )
}
