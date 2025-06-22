// app/page.tsx

import simple_connect_to_db from '../../lib/simple_connect';
import MainHome from './Main/page';

export default async function HomePage() {
  simple_connect_to_db();
  // 1) get the current user
  // 5) render either the protected MainHome or a “please log in” prompt
  return(
    <MainHome />
  )
}
