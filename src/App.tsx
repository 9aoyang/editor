import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, Edit } from './container';
import { data } from './data';

function App() {
  const [posts, setPosts] = React.useState(data);

  const props = {
    posts,
    setPosts,
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home {...props} />} />
        <Route path="edit">
          <Route path=":postId" element={<Edit {...props} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
