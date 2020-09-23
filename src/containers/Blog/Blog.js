import React, {Component} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import './Blog.css';
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
  render() {
    return (
      <div className={"Blog"}>
        <header>
          <ul>
            <li>
              <NavLink
                to={'/'}
                exact
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit=true'
                  }}
              >
                New Post
              </NavLink>
            </li>
          </ul>
        </header>
        <Route path={'/'} exact component={Posts}/>
        <Route path={'/new-post'} component={NewPost}/>
        <Route path={'/:id'} exact component={FullPost}/>
      </div>
    );
  }
}

export default Blog;