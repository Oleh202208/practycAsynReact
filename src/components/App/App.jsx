import { Layout } from 'components/Layout/Layout';
import { HomePages } from 'components/Pages/HomePages/HomePages';
import UsersPages from 'components/Pages/UserPages/UserPages';
import UsersDetailsPage from 'components/Pages/UsersDetailsPage/UsersDetailsPage';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePages />} />
        <Route path="users" element={<UsersPages />} />
        <Route path="users/:id" element={<UsersDetailsPage />} />
      </Route>
    </Routes>
  );
};
