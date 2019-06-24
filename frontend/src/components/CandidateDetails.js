import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchApplication } from '../store/actions/actions';
import CandidateVideo from './CandidateVideo';

class CandidateDetails extends Component {
    componentDidMount() {
        if (this.props.loading){
            const { id } = this.props.match.params;
            this.props.fetchApplication(id);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            const { id } = this.props.match.params;
            this.props.fetchApplication(id);
        }
    }



    render(){
        const currentName = this.props ? this.props.candidates.filter(person => person.applicationId === this.props.application.id) : "";

    return (
        <div className="candidateDetails">
            <h2>{currentName.map(obj => obj.name)}'s Application:</h2>
            {!this.props.loading ? this.props.application.videos.map(vid => (
                <CandidateVideo video={vid.src} key={vid.src} question={vid.questionId}/>
                ))
            : "" }
        </div>

    );}
}

const mapStateToProps = state => ({
    application: state.applications.applicationDetails,
    loading: state.applications.applicationsLoading,
    error: state.applications.error,
    candidates: state.candidates.candidates
});

const mapDispatchToProps = {
    fetchApplication
};

export default connect(mapStateToProps, mapDispatchToProps)(CandidateDetails);