
import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/HomePage';
import { Blog } from './pages/BlogPage';
import { Post } from './pages/PostPage';
import { About } from './pages/AboutPage';
import { NotFound } from './pages/NotFoundPage';
import Layout from "./components/Layout";


function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="post/:id" element={<Post />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
