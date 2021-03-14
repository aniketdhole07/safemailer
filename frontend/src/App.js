import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ContactForm from './components/ContactForm';
import Receive from './components/Receive';
import { firestoreConnect} from  'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
import PersonalForm from './components/PersonalForm';


function App(props) {
  const {ids,mails}=props;
 //console.log(2,ids);
//  for(var key in ids)
//   {
//     if(uid === data[key]["id"])
//     {
     
//     }
//   }
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" exact component={()=><Home ids={ids}/>} />
    </Switch>
    <Switch>
      <Route exact path="/rec" component={Receive} />
    </Switch>
    <Switch>
      <Route exact path="/send" exact component={()=><ContactForm ids={ids}/>} />
    </Switch>
    <Switch>
      <Route path="/form/:id" exact component={props=><PersonalForm {...props} ids={ids}/>} />
      </Switch>
    </BrowserRouter>
  );
}


const mapStateToProps=(state)=>{
  //console.log(1,state);
  if (state.firestore.data){
    return{
    ids: state.firestore.ordered.idtomail,
    mails: state.firestore.ordered.mailtoid
  }
  }
  else{
    return{}
  }
  
}
export default compose(

  firestoreConnect([
      { collection: 'idtomail'},
      {collection: 'mailtoid' }
    ]),
    connect(mapStateToProps)
  )(App);


