import { useState } from "react"
import style from "./SearchBar.module.css"

export const SearchBar = () => {
    const [search, setSearch] = useState<Boolean>(false)

    return (
        <label htmlFor="search" className={style.search_container}>
            <input
                className={style.search}
                style={search ? { display: "block" } : undefined}
                placeholder="Search..." type="text" name="search" id="search" />
            <div
                className={style.search_icon}
                style={search ? { borderRadius: "0 var(--border-radius) var(--border-radius) 0" } : undefined}
                onClick={() => setSearch(!search)}>
                <img src="./search.svg" alt="search" />
            </div>
        </label>
    )
}
