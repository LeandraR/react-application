import React, { Component } from 'react';
import { connect } from "react-redux";
import { postComments } from '../store/actions/actions';

class CandidateComments extends Component {
    constructor(props){
        super(props);
        this.state = {
            localComments : ""
        }
    };

    handleChange (e){
        this.setState({
            localComments: e.target.value
        });
        // console.log(e.target.value)
        // console.log(this.state.localComments)
    }

    onSaveClick = (userId, questionId, comments = "") => {
        this.props.postComments(userId, questionId, comments)
        // console.log(userId, questionId, comments)
    }

    render(){
        const { id, question } = this.props;
        const questionId = this.props ? question.map(item => item.id) : "";

        return (
          <>
            {/* {console.log(questionId)} */}
            <textarea
              name="comment"
              id="comment"
              cols="30"
              rows="10"
              onChange={this.handleChange.bind(this)}
            />

            <button
              type="submit"
              onClick={() => this.onSaveClick(id, parseInt(questionId), this.state.localComments)}>
              Save comments
            </button>
          </>
        );
    }

};

const mapStateToProps = state => ({
  candidates: state.candidates.candidates,
  loading: state.candidates.candidatesLoading,
  error: state.candidates.candidatesError,
  questions: state.questions.questions,
  questionsError: state.questions.questionsError
});

const mapDispatchToProps = {
  postComments
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CandidateComments);