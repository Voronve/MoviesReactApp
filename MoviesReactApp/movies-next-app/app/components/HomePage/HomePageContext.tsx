'use client'
import { createContext } from "react";
import { sortValue } from "../SortControl/SortControl";

const HomePageContext = createContext({
    genre: '',
    sortBy: '',
    handleActiveGenreChange: (value: string) => {},
    handleSortCriterionChange: (value: sortValue) => {}
});

export default HomePageContext;