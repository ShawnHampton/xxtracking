import React from 'react';
import { mount } from 'enzyme';
import app from 'modules/app/app';

describe('app', () => {
	it('renders without crashing', () => {
		mount(<app />);
	});
});
