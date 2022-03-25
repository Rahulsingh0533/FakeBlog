import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import data from "./data";
import { format } from "date-fns"; // This was used for date formatting

//Import components
import Home from "./appcomponents/Home";
import About from "./appcomponents/About";
import NewPost from "./appcomponents/NewPost";
import PostPage from "./appcomponents/PostPage";
import Errorpage from "./appcomponents/Errorpage";
import Footer from "./appcomponents/Footer";
import Header from "./appcomponents/Header";
import Navbar from "./appcomponents/Navbar";

function App() {
  const [posts, setPosts] = useState(data);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  //New Post Handler

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle("");
    setPostBody("");
    Navigate("/");
  };

  const Navigate = useNavigate();

  //Post searching
  useEffect(() => {
    const FilterResults = posts.filter((post) => {
      return (
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
      );
    });

    setSearchResults(FilterResults.reverse());
  }, [posts, search]);

  const handleDelete = (id) => {
    const post = posts.filter((post) => post.id !== id);
    setPosts(post);
    Navigate("/");
  };
  return (
    <div className="App">
      <Header blogTitle="Fake Blog" />
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route exact path="/" element={<Home posts={searchResults} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/post/:id"
          element={<PostPage posts={posts} handleDelete={handleDelete} />}
        />
        <Route
          path="/newpost"
          element={
            <NewPost
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
              handlePostSubmit={handlePostSubmit}
            />
          }
        />
        <Route path="*" element={<Errorpage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
