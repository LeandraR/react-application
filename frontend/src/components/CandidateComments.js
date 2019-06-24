import React, { Component } from 'react';

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
        console.log(this.state.localComments)
    }
    render(){
        return (
            <>
                <textarea name="" id="" cols="30" rows="10" onChange={this.handleChange.bind(this)}></textarea>
                <button type="submit">Save comments</button>
            </>
        )
    }

};

export default CandidateComments;