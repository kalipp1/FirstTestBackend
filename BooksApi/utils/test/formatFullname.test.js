const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {

    it('should return an error if "firstName" or "lastName" is empty', () => {
        expect(formatFullname("", "")).to.equal('Error');
        expect(formatFullname("John", "")).to.equal('Error');
        expect(formatFullname("", "Doe")).to.equal('Error');
        expect(formatFullname("Doe")).to.equal('Error');
        expect(formatFullname("John", )).to.equal('Error');
    });
    it('should return an error if "firstName" or "lastName" arg is not a string', () => {
        expect(formatFullname(20, "Doe")).to.equal('Error');
        expect(formatFullname("John", 20)).to.equal('Error');
        expect(formatFullname(20, 25)).to.equal('Error');
    });
    it('should return an error if "fullName" contains more than two words', () => {
        expect(formatFullname('John Doe dwa')).to.equal('Error');
        expect(formatFullname('John Doe raz')).to.equal('Error');
        expect(formatFullname('John Doe raz dwa')).to.equal('Error');
      });
    it('should return an error if "fullName" contains only one word', () => {
        expect(formatFullname('John')).to.equal('Error');
        expect(formatFullname('Doe')).to.equal('Error');
      });
    it('should format correctly if "fullName" is valid', () => {
        expect(formatFullname('john doe')).to.equal('John Doe');
        expect(formatFullname('JoHN DoE')).to.equal('John Doe');
        expect(formatFullname('AMANDA DOE')).to.equal('Amanda Doe');
        expect(formatFullname('aMaNDa dOe')).to.equal('Amanda Doe');
      });
    it('should handle extra spaces around "fullName"', () => {
        expect(formatFullname('   john doe   ')).to.equal('John Doe');
        expect(formatFullname('  JoHN DoE')).to.equal('John Doe');
        expect(formatFullname('AMANDA DOE  ')).to.equal('Amanda Doe');
      });

  });