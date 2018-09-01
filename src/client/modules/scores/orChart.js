import { connect } from 'react-redux';
import React from 'react';

import * as d3 from 'd3';

import Paper from '@material-ui/core/Paper';

import {
	getCurrentOperatingRound,
	getMajors,
	getOperatingRounds,
	getPlay,
	getStartedMajors
} from '../game/selectors';

export class ORChart extends React.PureComponent {
	componentDidMount() {
		this.initializeChart();
		if (Object.keys(this.props.operatingRounds).length > 0) this.drawChart();
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('ors', this.props.operatingRounds);
		if (Object.keys(this.props.operatingRounds).length > 0) this.drawChart();
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

		this.line = d3
			.line()
			.x(d => {
				return this.x(d.x);
			})
			.y(d => {
				return this.y(d.y);
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

		this.g.select('.axis--x').call(d3.axisBottom(this.x));
		this.g.select('.axis--y').call(d3.axisLeft(this.y));
	}

	drawChart() {
		let data = {};

		this.z = d3
			.scaleOrdinal()
			.domain(Object.keys(this.props.majors))
			.range(['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'magenta']);

		this.props.startedMajors.forEach(company => {
			data[company.name] = {
				id: company.name,
				values: []
			};
		});

		Object.keys(this.props.operatingRounds).forEach((roundNumber, i) => {
			const round = this.props.operatingRounds[roundNumber];

			Object.keys(round).forEach(company => {
				data[company].values.push({ x: i, y: round[company].total });
			});
		});

		data = Object.values(data);

		let circleData = [];
		data.forEach(company => {
			if (company.values.length) {
				circleData.push({
					id: company.id,
					value: {
						x: company.values[company.values.length - 1].x,
						y: company.values[company.values.length - 1].y
					}
				});
			}
		});

		let labelData = JSON.parse(JSON.stringify(circleData));

		this.x.domain([0, Math.max(this.props.operatingRounds.length || 0, 10)]);
		this.y.domain([
			30,
			d3.max(data, function(c) {
				return d3.max(c.values, function(d) {
					return d.y;
				});
			})
		]);

		this.g.select('.axis--x').call(d3.axisBottom(this.x));
		this.g.select('.axis--y').call(d3.axisLeft(this.y));

		this.companyData = this.g.selectAll('.company').data(data, d => d.id);

		this.companyGroup = this.companyData
			.enter()
			.append('g')
			.attr('class', 'company');

		this.companyGroup
			.append('path')
			.attr('class', 'line')
			.style('stroke', d => {
				return this.z(d.id);
			})
			.style('fill', 'none')
			.attr('d', d => {
				return this.line(d.values);
			})
			.merge(this.companyData)
			.select('path')
			.attr('d', d => {
				return this.line(d.values);
			});

		this.g.selectAll('.companyCircle').remove();
		this.companyCircleData = this.g
			.selectAll('.companyCircle')
			.data(circleData, d => d.id);

		this.cc = this.companyCircleData.enter();

		this.cc
			.append('circle')
			.attr('class', d => 'companyCircle ' + d.id)
			.attr('r', 5)
			.style('fill', d => {
				return this.z(d.id);
			})
			.merge(this.companyCircleData)
			.attr('cx', d => {
				return this.x(d.value.x);
			})
			.attr('cy', d => {
				return this.y(d.value.y);
			});

		this.companyLabelData = this.g
			.selectAll('.labels')
			.data(labelData, d => d.id);
		this.cl = this.companyLabelData.enter();
		this.cl
			.append('g')
			.classed('labels', true)
			.append('text')
			.attr('transform', d => {
				return 'translate(' + this.x(d.value.x) + ',' + this.y(d.value.y) + ')';
			})
			.attr('x', 8)
			.attr('dy', '0.35em')
			.style('font', '10px sans-serif')
			.text(d => d.id);

		this.cl
			.merge(this.companyLabelData)
			.select('text')
			.attr('transform', d => {
				return 'translate(' + this.x(d.value.x) + ',' + this.y(d.value.y) + ')';
			});
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
	startedMajors: getStartedMajors(state),
	majors: getMajors(state)
});

export default connect(
	mapStateToProps,
	{}
)(ORChart);
