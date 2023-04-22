import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation></Navigation>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
