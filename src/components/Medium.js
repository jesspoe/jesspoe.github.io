import React, { Component } from 'react';

class Medium extends Component {
    componentDidMount() {
        window.mediumWidget();
    }
    render() {
        return (<div id="medium-widget"></div>);
    }
}
export default Medium;