import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import About from './About'
import Home from './Home'
import Profile from './Profile'
import Profiles from './Profiles'
import HistorySample from './HistorySample'
import CounterContainer from './containers/CounterContainer'
import TodosContainer from './containers/TodosContainer'
import Counter_middleware from './containers/CounterContainer_middleware'
import PostsContainer from './containers/PostListContainer'
import PostListPage from './pages/PostListPage'
import PostPage from './pages/PostPage'
function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
      </ul>
      <hr/>
      <Switch>
      <Route path="/" exact={true} component={Counter_middleware}/>
      <Route path="/post" exact={true} component={PostListPage}/>
      <Route path="/post/:id" component={PostPage}/>
      <Route path="/about" exact={true} component={About}/>
      <Route path="/profiles" component={Profiles}/>
      <Route path="/history" component={HistorySample}/>
      <Route path="/counter" component={CounterContainer}/>
      <Route path="/todo" component={TodosContainer}/>
      <Route
      //path를 따로 정의하지 않으면 모든 상황에 렌더링됨.
        render={({location})=>(
          <div>
            <h2>이 페이지에는 존재하지 않습니다 : </h2>
            <p>{location.pathname}</p>
          </div>
        )}
      />
      </Switch>
    </div>
  );
}

export default App;
