import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import PostForm from './pages/PostForm';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<PostList />} />
            <Route path="posts/:id" element={<PostDetail />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            
            <Route
              path="create-post"
              element={
                <ProtectedRoute>
                  <PostForm />
                </ProtectedRoute>
              }
            />
            
            <Route
              path="edit-post/:id"
              element={
                <ProtectedRoute>
                  <PostForm />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
  );
}

export default App;