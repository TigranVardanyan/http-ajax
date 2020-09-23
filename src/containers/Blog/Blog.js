import React, { Component } from 'react';
import axios from '../../axios';
import {Route} from "react-router";
import './Blog.css';
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost';


class Blog extends Component {





  render () {
        return (
            <div className={"Blog"}>
              <header>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/new-post">New post</a>
                  </li>
                </ul>
              </header>
              {/*<Route path={'/'} exact render={() => <h1>Home</h1>}/>*/}
              {/*<Route path={'/'} render={() => <h1>Home 2</h1>}/>*/}
              <Route path={'/'} exact component={Posts} />
              <Route path={'/new-post'} exact component={NewPost} />
            </div>
        );
    }
}

export default Blog;