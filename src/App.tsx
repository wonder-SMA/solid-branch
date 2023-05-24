import { FC } from 'react';
import { Route, Routes } from 'react-router';
import { publicRoutes } from './routes';

const App: FC = () => {

  return (
    <div className="app">
      <Routes>
        {publicRoutes.map(route => (
          <Route key={route.path} path={route.path} element={<route.Component />} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
