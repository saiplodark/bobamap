import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

// import{
//   stores
// } from './vars'

const {
    getStores
} = require('./Function');

describe('Testing get stores endpoint', () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  
    //getStores testing
    it('Gets stores from database', async done => {
      let stores;
      await act(async () => {
        stores = await getStores();
      });
      expect(stores[0].name).toBe('Tea Swirl');
      done();
    });
    expect(stores[0].address).toBe('725 S Rural Rd Suite 107, Tempe, AZ 85283');
    done();
  });