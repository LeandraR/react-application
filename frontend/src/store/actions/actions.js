//candidates
export const startCandidatesCall = () => ({
  type: 'START_CANDIDATES_CALL'
});

export const candidatesCallSuccessful = payload => ({
  type: 'CANDIDATES_CALL_SUCCESSFUL',
  payload
});

export const candidatesCallFailed = () => ({
  type: 'CANDIDATES_CALL_FAILED'
});


export const fetchCandidates = () => {
  return dispatch => {
    dispatch(startCandidatesCall());
      fetch(`http://localhost:3010/candidates`)
      .then(res =>
        !res.ok ? Promise.reject('Something went wrong :(') : res.json()
      )
      .then(data => {
        dispatch(candidatesCallSuccessful(data));
      })
      .catch(() => dispatch(candidatesCallFailed()));
  };
};







//applications
export const startApplicationsAPI = () => ({
    type: 'START_APPLICATIONS_CALL'
});

export const applicationsSuccessful = payload => ({
  type: 'APPLICATIONS_CALL_SUCCESSFUL',
  payload
});

export const applicationsCallFailed = () => ({
  type: 'APPLICATIONS_CALL_FAILED'
});

export const fetchApplication = id => {
  return dispatch => {
    dispatch(startApplicationsAPI());
    fetch(`http://localhost:3010/applications/${id}`)
      .then(res =>
        !res.ok ? Promise.reject('Something went wrong :(') : res.json()
      )
      .then(data => {
        dispatch(applicationsSuccessful(data));
      })
      .catch(() => dispatch(applicationsCallFailed()));

  };
};

export const applicationsCommentAdded = payload =>({
  type: 'APPLICATIONS_COMMENT_MADE',
  payload
})

export const postComments = (userId, questionId, data) => {
  return dispatch => {
    console.log(userId, questionId, data)
    // fetch(`http://localhost:3010/applications/${id}`, {
    //   method: "PUT",
    //   body: JSON.stringify(data)
    // })
    // .then(res => res.json())
    // .then(res => console.log(res))
      // .then(res =>
      //   !res.ok ? Promise.reject('Something went wrong :(') : res.json()
      // )
      // .then(data => {
      //   dispatch(applicationsCommentAdded(data));
      // })
      // .catch(() => dispatch(applicationsCallFailed()));

  };
};


//questions
export const startQuestionsAPI = () => ({
  type: 'START_QUESTIONS_CALL'
});

export const questionsSuccessful = payload => ({
  type: 'QUESTIONS_CALL_SUCCESSFUL',
  payload
});

export const questionsCallFailed = () => ({
  type: 'QUESTIONS_CALL_FAILED'
});

export const fetchQuestions = () => {
  return dispatch => {
    dispatch(startQuestionsAPI());
    fetch(`http://localhost:3010/questions`)
      .then(res =>
        !res.ok ? Promise.reject('Something went wrong :(') : res.json()
      )
      .then(data => {
        dispatch(questionsSuccessful(data));
      })
      .catch(() => dispatch(questionsCallFailed()));

  };
};
