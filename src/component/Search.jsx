import React from "react";
function Search() {
    return(
        <div className="py-16">
            <div className="border-2 rounded-3xl 
                bg-white m-12 p-4 px-6 text-2xl relative">
            <label 
                for ="SEARCH" 
                class = "block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            </label>
            <input 
                type = "text" 
                id="SEARCH"
                class="py-3 px-3 bg-gray-50 border border-gray-200 rounded-3xl " 
                placeholder="Search for job">
            </input>
            <button 
                class ="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
                Search
            </button>
            </div>
        </div>
    )
}
export default Search