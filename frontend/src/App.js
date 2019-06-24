import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CandidateList from './components/CandidateList';
import CandidateDetails from './components/CandidateDetails';

import { connect } from 'react-redux';
import { fetchCandidates, fetchQuestions } from './store/actions/actions';

class App extends Component {
  componentDidMount() {
    if (!this.props.loading) {
      this.props.fetchCandidates();
      this.props.fetchQuestions();
    }
  }
  render(){
  return (
    <>
      <Header />
      <main>
        <Router>
          <CandidateList />
          <Switch>
            <Route path="/applications/:id" component={CandidateDetails} />
          </Switch>
          {/* <Route exact path="/" component={CandidateList} /> */}

        </Router>
      </main>
    </>
    );
  }
}

const mapStateToProps = state => ({
  candidates: state.candidates.candidates,
  loading: state.candidates.candidatesLoading,
  error: state.candidates.candidatesError,
  questions: state.questions.questions,
  questionsError:state.questions.questionsError
});

const mapDispatchToProps = {
  fetchCandidates,
  fetchQuestions
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
