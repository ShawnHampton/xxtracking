import React from 'react';
import { shallow } from 'enzyme';
// Grabbing only the unconnected raw component
import { TodoRaw as Todo } from 'todo';

const config = {
	text: 'test'
};

function makeStr(length = 10) {
	let text = '';
	const possible =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < length; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	return text;
}
const randStr = makeStr(10000);
const onTextChangeCases = [
	{
		name: 'Basic Change',
		value: '+A+,,SDF12.34.56',
		result: '+A+,,SDF12.34.56'
	},
	{
		name: 'Weird Characters',
		value: 'Af02h$#480kj~```(cÕ„®)',
		result: 'Af02h$#480kj~```(cÕ„®)'
	},
	{
		name: 'No Characters',
		value: '',
		result: ''
	},
	{
		name: 'Random very long Alphanumeric string',
		value: randStr,
		result: randStr
	}
];

describe('Todo', () => {
	let wrapper = null;
	beforeEach(() => {
		wrapper = shallow(<Todo {...config} />);
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
		describe('On Text Change', () => {
			onTextChangeCases.forEach(item => {
				test(item.name, () => {
					const value = item.value;
					wrapper.setProps({ ...item.props, text: value });
					let text = wrapper
						.find('article')
						.find('span')
						.text();
					expect(text).toEqual(item.result);
				});
			});
		});
	});
});
