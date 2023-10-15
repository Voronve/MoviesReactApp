export default function formQueryParamString(searchParams: URLSearchParams): string {
    const query = searchParams.get('query');
    const sortBy = searchParams.get('sortBy');
    const genre = searchParams.get('genre');

    const paramsArr: string[] = [];

    if(query) paramsArr.push(`query=${query}`);
    if(sortBy) paramsArr.push(`sortBy=${sortBy}`);
    if(genre) paramsArr.push(`genre=${genre}`);

    return paramsArr.length ? `?${paramsArr.join('&')}` : '';
}