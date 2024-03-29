import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator/error-indicator';

export default class ErrorBoundary extends Component {
  state = {
    error: null,
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    return this.state.error ? <ErrorIndicator /> : this.props.children;
  }
}
