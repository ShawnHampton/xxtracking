import React from 'react';
import { shallow } from 'enzyme';
// Grabbing only the unconnected raw component
import { ListRaw as List } from 'todo';

const config = {
	addTodo: jest.fn(),
	todoIds: ['1', '2']
};

describe('List', () => {
	let wrapper = null;
	beforeEach(() => {
		wrapper = shallow(<List {...config} />);
	});

	describe('Setup and Props', () => {
		test('Match previous snapshot', () => {
			expect(wrapper).toMatchSnapshot();
		});
		test('Match config props', () => {
			expect(wrapper.instance().props).toEqual(expect.objectContaining(config));
		});
	});

	describe('User Input Cases', () => {
		test('On Add Todo', () => {
			wrapper.find('button').simulate('click');
			expect(config.addTodo).toBeCalled();
		});
	});
});
