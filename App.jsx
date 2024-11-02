import React from "react"
import Header from "./components/Header.jsx"
import SearchBar from "./components/SearchBar.jsx"
import FilterRegion from "./components/FilterRegion.jsx"
import "./App.css"
import CountriesList from "./components/CountriesList.jsx"
import Mode from "./components/Mode.jsx"
import { useState } from "react"


const App = () => {
    const [query, setQuery] = useState("")
    return (
        <>
            <Header />
            <main>
                <div class="search-filter-container">
                    <SearchBar setQuery={setQuery} />
                    <FilterRegion />
                </div>
                <CountriesList query={query} />
                <Mode  />
            </main>
        </>
    )
}
export default App