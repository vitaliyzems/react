import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  errorSelector,
  loadingSelector,
  postSelector,
} from "./store/postsReduser/selector";
import { getPosts } from "./store/postsReduser/postsReduser";
import "./styles/app.css";

function App() {
  const posts = useSelector(postSelector);
  const isLoading = useSelector(loadingSelector);
  const isError = useSelector(errorSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  console.log(posts);

  if (isLoading) {
    return <div className="loader">...Loading</div>;
  }

  if (isError) {
    return <div className="loader">Something goes wrong</div>;
  }

  return (
    <div className="container">
      {posts.map((post) => {
        return (
          <div key={post.id} className="post">
            <h3 className="postTitle">{post.title}</h3>
            <p className="postBody">{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
