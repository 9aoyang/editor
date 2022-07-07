import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { Home, Edit } from './container';
import { data } from './data';

const App = () => {
  const [posts, setPosts] = React.useState(data);

  const props = {
    posts,
    setPosts,
  };

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home {...props} />} />
        <Route path="edit">
          <Route path=":postId" element={<Edit {...props} />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
