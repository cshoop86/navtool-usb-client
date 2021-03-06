import React, { Component} from 'react';
import { connect} from 'react-redux';

class Messages extends Component {
  constructor(props){
    super(props);
    this.renderMessage = this.renderMessage.bind(this);
  }

  renderMessage(){
    if (this.props.message.length > 0) {
      return (
        <div>
          <i className={`red info icon`}></i>
          {this.props.message}
        </div>
      );
    }
  }

  render(){
    return (
      <div>
        { this.renderMessage() }
      </div>
    );
  }
}

function mapStateToProps(state){
  return { message: state.message };
}

export default connect(mapStateToProps)(Messages);
