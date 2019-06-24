import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class CandidateList extends Component {
    render() {
        return (
            <div className="candidateList">
                <h1>Candidates</h1>
                <ul>
                    {this.props.candidates.map(person => (<ListItem key={person.id} name={person.name} applicationId={person.applicationId}/>))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    candidates: state.candidates.candidates || [],
    loading: state.candidates.candidatesLoading,
    error: state.candidates.candidatesError
});

export default connect(mapStateToProps)(CandidateList);