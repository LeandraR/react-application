import React, { Component } from 'react';
import { connect } from 'react-redux';
import CandidateComments from './CandidateComments';



class CandidateVideo extends Component {
    render(){

        const questionToDisplay = this.props.questionsFromStore ? this.props.questionsFromStore.filter(q => q.id === this.props.question) : "";

        return (
            <>
                <h3>{questionToDisplay.map(item => item.question)}</h3>
                <video width='25%' height='auto' controls>
                    <source src={this.props.video} type='video/mp4' />
                </video>
                <CandidateComments id={this.props.id} question={questionToDisplay}/>
            </>
        );
    }
};

const mapStateToProps = state => ({
    questionsFromStore: state.questions.questions
});


export default connect(mapStateToProps)(CandidateVideo);