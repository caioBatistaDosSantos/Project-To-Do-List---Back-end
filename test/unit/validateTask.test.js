/* eslint-disable no-undef */
const { expect } = require('chai');
const sinon = require('sinon');
const validateTask = require('../../middlewares/validateTask');

describe('Testando o middleware validateTask:', () => {
  describe('Quando "task" não é encontrado:', () => {
    const req = { body: { status: 'pendente' } };
    const res = {};
    const next = () => {};

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    it('retorna status "400"', async () => {
      await validateTask(req, res, next);

      expect(res.status.calledWith(400)).to.be.equal(true);
    });

    it('retorna um uma mensagem de erro', async () => {
      await validateTask(req, res, next);

      expect(res.json.calledWith({ message: '"task" is required' })).to.be.equal(true);
    });
  });

  describe('Quando "task" têm menos que 10 caracteres:', () => {
    const req = { body: { task: 'task', status: 'pendente' } };
    const res = {};
    const next = () => {};

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    it('retorna status "400"', async () => {
      await validateTask(req, res, next);

      expect(res.status.calledWith(400)).to.be.equal(true);
    });

    it('retorna um uma mensagem de erro', async () => {
      await validateTask(req, res, next);

      expect(res.json.calledWith({ message: '"task" length must be at least 10 characters long' })).to.be.equal(true);
    });
  });

  describe('Quando "status" não é encontrado:', () => {
    const req = { body: { task: 'Task example 1' } };
    const res = {};
    const next = () => {};

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    it('retorna status "400"', async () => {
      await validateTask(req, res, next);

      expect(res.status.calledWith(400)).to.be.equal(true);
    });

    it('retorna um uma mensagem de erro', async () => {
      await validateTask(req, res, next);

      expect(res.json.calledWith({ message: '"status" is required' })).to.be.equal(true);
    });
  });

  describe('Quando "status" têm menos que 5 caracteres:', () => {
    const req = { body: { task: 'Task example 1', status: 'test' } };
    const res = {};
    const next = () => {};

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    it('retorna status "400"', async () => {
      await validateTask(req, res, next);

      expect(res.status.calledWith(400)).to.be.equal(true);
    });

    it('retorna um uma mensagem de erro', async () => {
      await validateTask(req, res, next);

      expect(res.json.calledWith({ message: '"status" length must be at least 5 characters long' })).to.be.equal(true);
    });
  });

  describe('Testando caso de sucesso:', () => {
    const req = { body: { task: 'Task example 1', status: 'pendente' } };
    const res = {};
    const next = () => {};

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    it('não retorna status ou mensagens de erro', async () => {
      await validateTask(req, res, next);

      expect(res.status.calledWith(400)).to.be.equal(false);
      expect(res.json.calledWith({ message: '*' })).to.be.equal(false);
    });
  });
});
