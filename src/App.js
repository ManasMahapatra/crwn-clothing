import React from 'react';
import { connect } from 'react-redux';
import { Route,Switch,Redirect } from 'react-router-dom';
import './App.css';
//pages
//--------------
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUp from './pages/signIn-signUp/signIn-signUp.component';
import Header from './components/header/header.component';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';
//Prop tunelling: when a prop is only available to the top parent class, and we drill it layers under
//the children tree, its called prop tunelling and is often a bad practice.
//class isnt a callble object. For God's sake stop doing React.Component()....
class App extends React.Component{
  // Placing Header out of the switch makes the header component stay always on the top, irrespective of the switch page
  unsubscribeFromAuth = null
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        })} else {
        this.props.setCurrentUser(userAuth)
      }
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInSignUp />)} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
