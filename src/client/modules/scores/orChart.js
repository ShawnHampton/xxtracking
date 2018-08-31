import { connect } from 'react-redux';
import React from 'react';

import * as d3 from 'd3';

import Paper from '@material-ui/core/Paper';

import {
	getCurrentOperatingRound,
	getOperatingRounds,
	getPlay,
	getStartedMajors
} from '../game/selectors';

export class ORChart extends React.PureComponent {
	componentDidMount() {
		this.initializeChart();
		if (this.props.operatingRounds.length > 0) this.drawChart();
	}

	componentDidUpdate() {
		if (this.props.operatingRounds.length > 0) this.drawChart();
	}

	initializeChart() {
		this.svg = d3.select('#orChart svg');
		this.margin = { top: 20, right: 80, bottom: 30, left: 50 };
		this.width = this.svg.attr('width') - this.margin.left - this.margin.right;
		this.height =
			this.svg.attr('height') - this.margin.top - this.margin.bottom;

		this.g = this.svg
			.append('g')
			.attr(
				'transform',
				'translate(' + this.margin.left + ',' + this.margin.top + ')'
			);

		this.x = d3
			.scaleLinear()
			.range([0, this.width])
			.domain([0, 10]);
		this.y = d3
			.scaleLinear()
			.range([this.height, 0])
			.domain([0, 200]);
		this.z = d3.scaleOrdinal(d3.schemeCategory10);

		this.line = d3
			.line()
			.curve(d3.curveBasis)
			.x((d, i) => {
				return this.x(i);
			})
			.y(d => {
				return this.y(d);
			});

		this.g
			.append('g')
			.attr('class', 'axis axis--x')
			.attr('transform', 'translate(0,' + this.height + ')');

		this.g
			.append('g')
			.attr('class', 'axis axis--y')
			.append('text')
			.attr('transform', 'rotate(-90)')
			.attr('y', 6)
			.attr('dy', '0.71em')
			.attr('fill', '#000')
			.text('Value ($)');

		this.x.domain([0, Math.max(this.props.operatingRounds.length || 0, 10)]);
		this.y.domain([0, 200]);
	}

	drawChart() {
		this.x.domain([0, Math.max(this.props.operatingRounds.length || 0, 10)]);
		this.y.domain([0, 200]);
		this.z.domain(this.props.startedMajors);

		this.g.select('.axis--x').call(d3.axisBottom(this.x));
		this.g.select('.axis--y').call(d3.axisLeft(this.y));

		let data = {};

		this.props.startedMajors.forEach(company => {
			data[company.name] = {
				id: company.name,
				values: []
			};
		});

		Object.values(this.props.operatingRounds).forEach(round => {
			Object.keys(round).forEach(company => {
				data[company].values.push(round[company].total);
			});
		});

		data = Object.values(data);

		this.company = this.g
			.selectAll('.company')
			.data(data)
			.enter()
			.append('g')
			.attr('class', 'company');

		this.company
			.append('path')
			.attr('class', 'line')
			.attr('d', d => {
				return this.line(d.values);
			})
			.style('stroke', d => {
				return this.z(d.id);
			});

		this.company
			.append('circle')
			.data((d, i) => {
				return {
					id: d.values.length,
					value: { index: i, value: d.values[d.values.length - 1] || 0 }
				};
			})
			.attr('r', 5)
			.attr('cx', d => {
				return this.x(d.value.index);
			})
			.attr('cy', d => {
				return this.y(d.value.value);
			});
		// .attr('x', 3)
		// .attr('dy', '0.35em')
		// .style('font', '10px sans-serif')
		// .text(d => d.id);
	}

	render() {
		return (
			<Paper id="orChart">
				<svg width="800" height="200" />
			</Paper>
		);
	}
}

const mapStateToProps = (state, props) => ({
	play: getPlay(state),
	operatingRounds: getOperatingRounds(state),
	currentOperatingRound: getCurrentOperatingRound(state),
	startedMajors: getStartedMajors(state)
});

export default connect(
	mapStateToProps,
	{}
)(ORChart);
