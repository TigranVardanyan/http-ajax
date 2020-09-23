import React, {Component} from 'react';
import {NavLink, Route} from "react-router-dom";
import './Blog.css';
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost';

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
                activeClassName={'my-active-class'}
                activeStyle={{color: 'red'}}
              >
                New Post
              </NavLink>
            </li>
          </ul>
        </header>
        {/*<Route path={'/'} exact render={() => <h1>Home</h1>}/>*/}
        {/*<Route path={'/'} render={() => <h1>Home 2</h1>}/>*/}
        <Route path={'/'} exact component={Posts}/>
        <Route path={'/new-post'} component={NewPost}/>
      </div>
    );
  }
}

export default Blog;