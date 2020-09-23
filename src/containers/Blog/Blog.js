import React, {Component} from 'react';
import {NavLink, Route, Switch, Redirect} from "react-router-dom";
import './Blog.css';
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost';

class Blog extends Component {
  state = {
    auth: false,
  }
  render() {
    return (
      <div className={"Blog"}>
        <header>
          <ul>
            <li>
              <NavLink
                to={'/posts/'}
                exact
              >
                Posts
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
        <Switch>
          {this.state.auth ? <Route path={'/new-post'} component={NewPost}/> : null}
          <Route path={'/posts'} component={Posts}/>
          <Redirect from={"/"} to={'/posts'}/>
        </Switch>
      </div>
    );
  }
}

export default Blog;