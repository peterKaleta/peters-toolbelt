import WebpackConfig from '../';
import {expect} from 'chai';

describe('webpack', () => {
  it('is', done => {
    let wc = new WebpackConfig();
    expect(wc).to.exist;
    done();
  });
});
