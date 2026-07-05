"use client";

export default function SearchBar({
search,
setSearch,
}) {

return (

<input

type="text"

placeholder="Search blogs..."

className="border p-3 rounded-lg w-full mb-8"

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>

);

}
