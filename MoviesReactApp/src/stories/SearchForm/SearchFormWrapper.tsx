import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchForm } from "../../components/SearchForm/searchForm";

export default function SearchFormWrapper() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<SearchForm/>}/>
            </Routes>
        </BrowserRouter>
    );
}
