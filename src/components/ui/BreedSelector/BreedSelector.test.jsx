import * as React from 'react';
import { shallow } from 'enzyme';

import BreedSelector from '.';

describe('Breed selector', () => {
  const props = {
    breeds: [
      {
        id: 'id-1',
        name: 'Border collie'
      }, {
        id: 'id-2',
        name: 'Labrador'
      }, {
        id: 'id-3',
        name: 'Cocker'
      }, {
        id: 'id-4',
        name: 'Jack Russel'
      }
    ],
    onSelectBreed: jest.fn()
  };
  it('Should display as many breeds as given in args.', () => {
    const wrapper = shallow(<BreedSelector breeds={props.breeds} />);

    const breeds = wrapper.find('.breed');
    expect(breeds).toHaveLength(4);
    expect(breeds.get(0).props.children).toEqual(props.breeds[0].name);
    expect(breeds.get(1).props.children).toEqual(props.breeds[1].name);
    expect(breeds.get(2).props.children).toEqual(props.breeds[2].name);
    expect(breeds.get(3).props.children).toEqual(props.breeds[3].name);
  });

  it('Should display as many breeds with name as given in another args.', () => {
    const otherProps = {
      breeds: [
        {
          id: 'id-5',
          name: 'Berger Allemand'
        }, {
          id: 'id-6',
          name: 'Berger Australien'
        }, {
          id: 'id-7',
          name: 'Chihuahua'
        }, {
          id: 'id-8',
          name: 'Didier'
        }
      ]
    };
    const wrapper = shallow(<BreedSelector breeds={otherProps.breeds} />);

    const breeds = wrapper.find('.breed');
    expect(breeds).toHaveLength(4);
    expect(breeds.get(0).props.children).toEqual(otherProps.breeds[0].name);
    expect(breeds.get(1).props.children).toEqual(otherProps.breeds[1].name);
    expect(breeds.get(2).props.children).toEqual(otherProps.breeds[2].name);
    expect(breeds.get(3).props.children).toEqual(otherProps.breeds[3].name);
  });

  it('Should call "onSelectBreed" prop with breed id when clicking on breed id.', () => {
    const props = {
      breeds: [
        {
          id: 'id-1',
          label: 'Border collie'
        }
      ],
      onSelectBreed: jest.fn()
    };
    const wrapper = shallow(<BreedSelector breeds={props.breeds} onSelectBreed={props.onSelectBreed} />);

    const onSelectBreed = wrapper.find('.breed').prop('onClick');

    onSelectBreed();

    expect(props.onSelectBreed).toHaveBeenCalledWith(props.breeds[0].id);
  });
});