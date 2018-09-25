import React from 'react';
import PropTypes from 'prop-types';
import JobForm from '../forms/JobForm';

class JobScreen extends React.Component {
  static propTypes = {
    item: PropTypes.object
  };

  static defaultProps = {
    item: undefined
  };

  componentDidMount() {
    // load existing job if we are editing
  }

  handleSubmitSuccess = () => {
    // navigate to next screen
  };

  render() {
    const { item } = this.props;
    return <JobForm item={item} onSubmitSuccess={this.handleSubmitSuccess} />;
  }
}

export default JobScreen;
