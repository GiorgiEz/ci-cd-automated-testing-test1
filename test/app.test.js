import { expect as _expect } from 'chai';
const expect = _expect;


describe('GET /hello', () => {
    it('should return "Hello World!"', (done) => {
      const http = require('http');
      http.get('http://localhost:3000/hello', (res) => {
        let data = '';
        res.on('data', chunk => { data += chunk; });
        res.on('end', () => {
          expect(data).to.equal('Hello World!');
          done();
        });
      });
    });
  });
  