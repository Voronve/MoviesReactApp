import { MovieInfo } from '@/app/page';
import { SearchForm } from '../SearchForm/SearchForm';
import HomePageLayout from './HomepageLayout';

export default function HomePage({ initialList }: { initialList: MovieInfo[] }) {

  return (
    <>
      <HomePageLayout initialList={initialList}>
        <SearchForm/>
      </HomePageLayout>
    </>
  )
}
