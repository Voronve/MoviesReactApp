import { sortValue } from "@/app/components/SortControl/SortControl";

export default function formQueryParamString(searchParams: { [key: string]: string }): string {
    
    let query = searchParams.query || '';
    let sortBy = searchParams.sortBy as sortValue || sortValue.default;
    let genre = searchParams.genre || 'All';
    const paramsArr: string[] = [];

    if(query) paramsArr.push(`query=${query}`);
    if(sortBy) paramsArr.push(`sortBy=${sortBy}`);
    if(genre) paramsArr.push(`genre=${genre}`);

    return paramsArr.length ? `?${paramsArr.join('&')}` : '';
}