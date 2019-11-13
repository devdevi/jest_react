import React from 'react';
import Hello from '../components/Hello.jsx';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from  'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Añadir pruebas a react', () => {
    test('COmprobamos el texto que recibe por prop', () => {
        const data =  {title: 'Hola jest'};
        const wrapper = mount(
            <Hello title={data.title} />
        );
        const h1 = wrapper.find('h1');
        expect(h1.text()).toBe('Hola jest');
    });
});