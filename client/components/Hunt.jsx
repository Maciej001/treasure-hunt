Hunt = React.createClass({

  getInitialState() {
    return {
      proximityBeacon1: 10000,
      proximityBeacon1: 10000,
      proximityBeacon1: 10000,
      answer: ""
    }
  },
  
  submitAnswer(e) {
    e.preventDefault();
    this.setState({ answer: this.refs.answer })

    // Logic what happens when user answers
  },

  render() {
    return (
      <div>
        <div className="container hunt">
          <div className="hunt-wrapper">
            
            <div className="row indicators">
              <div className="col-xs-12">

                <ul>
                  <li className="indicator-1 indicator">1</li>
                  <li className="indicator-2 indicator">2</li>
                  <li className="indicator-3 indicator">3</li>
                </ul>
              </div>
            </div>

            <div className="row puzzles">
              <div className="col-xs-12">

                <div className="row questions">
                  <div className="col-xs-12">
                    <h1>Questions</h1>
                    <p>Bla bla bla?</p>
                  </div>
                </div>
                
                <div className="row answers">
                  <div className="col-xs-12">
                    <h1>Anwers</h1>
                    <form role="form" onSubmit={ this.submitAnswer }>
              
                      <div className="form-group">
                        <input 
                          type="text" 
                          className="form-control" 
                          ref="answer" 
                          placeholder="Answer" 
                          onChange={ this.onNameChange }
                        />
                      </div>


                      <button type="submit" id="submitButton" className="btn btn-hunt">Go!</button>

                    </form>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
})
  