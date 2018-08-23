import React from 'react';
import { connect } from 'react-redux';

export class Stock extends React.PureComponent {
	render() {
		return <div id="stock" />;
	}
}

const mapStateToProps = (state, props) => ({});

export default connect(
	mapStateToProps,
	{}
)(Stock);
