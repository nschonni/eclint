﻿import sinonChai = require('../../../sinon-chai');
var expect = sinonChai.expect;
import EndOfLineRule = require('../../../../lib/rules/EndOfLineRule');


// ReSharper disable WrongExpressionStatement
describe('end_of_line rule', () => {

	beforeEach(() => {
		//report.reset();
	});

	describe('check command', () => {

		it('validates "lf" setting', () => {
			//rule.check(context, { end_of_line: Newlines.lf }, new Line('foo\r'));
			//expect(report).to.have.been.calledOnce;
			//expect(report).to.have.been.calledWithExactly('Incorrect newline character found: cr');
		});

		it('validates "crlf" setting', () => {
			//rule.check(context, { end_of_line: Newlines.crlf }, new Line('foo\n'));
			//expect(report).to.have.been.calledOnce;
			//expect(report).to.have.been.calledWithExactly('Incorrect newline character found: lf');
		});

		it('validates "cr" setting', () => {
			//rule.check(context, { end_of_line: Newlines.cr }, new Line('foo\r\n'));
			//expect(report).to.have.been.calledOnce;
			//expect(report).to.have.been.calledWithExactly('Incorrect newline character found: crlf');
		});

		it('validates "ls" setting', () => {
			//rule.check(context, { end_of_line: Newlines.ls }, new Line('foo\u2029'));
			//expect(report).to.have.been.calledOnce;
			//expect(report).to.have.been.calledWithExactly('Incorrect newline character found: ps');
		});

		it('validates "ps" setting', () => {
			//rule.check(context, { end_of_line: Newlines.ps }, new Line('foo\n'));
			//expect(report).to.have.been.calledOnce;
			//expect(report).to.have.been.calledWithExactly('Incorrect newline character found: lf');
		});
	});

	describe('fix command', () => {

		it('replaces newline character with "lf" when "lf" is the setting', () => {
			//var line = rule.fix({ end_of_line: Newlines.lf }, new Line('foo\r\n'));
			//expect(line.Raw).to.equal('foo\n');
		});

		it('does nothing when there is no setting', () => {
			//var line = rule.fix({}, new Line('foo\r\n'));
			//expect(line.Raw).to.equal('foo\r\n');
		});

	});

	describe('infer command', () => {

		it('infers "lf" setting', () => {
			//var inferred = rule.infer(new Line('foo\n'));
			//expect(inferred).to.equal(Newlines.lf);
		});

		it('infers "crlf" setting', () => {
			//var inferred = rule.infer(new Line('foo\r\n'));
			//expect(inferred).to.equal(Newlines.crlf);
		});

		it('infers "cr" setting', () => {
			//var inferred = rule.infer(new Line('foo\r'));
			//expect(inferred).to.equal(Newlines.cr);
		});

		it('infers "ls" setting', () => {
			//var inferred = rule.infer(new Line('foo\u2028'));
			//expect(inferred).to.equal(Newlines.ls);
		});

		it('infers "ps" setting', () => {
			//var inferred = rule.infer(new Line('foo\u2029'));
			//expect(inferred).to.equal(Newlines.ps);
		});

		it('infers nothing when no newline characters exist', () => {
			//var inferred = rule.infer(new Line('foobarbaz'));
			//expect(inferred).to.be.undefined;
		});
	});

});
