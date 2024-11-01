import React from "react"
import Header from "./components/Header.jsx"
import SearchBar from "./components/SearchBar.jsx"
import FilterRegion from "./components/FilterRegion.jsx"
import "./App.css"
import CountriesList from "./components/CountriesList.jsx"
import Mode from "./components/Mode.jsx"


const App = () => {
    
    return (
        <>
            <Header />
            <main>
                <div class="search-filter-container">
                    <SearchBar />
                    <FilterRegion />
                </div>
                <CountriesList />
                <Mode  />
            </main>
        </>
    )
}
export default App