/* eslint-disable no-undef */
const { expect } = require('chai');
const sinon = require('sinon');
const listService = require('../../services/listService');
const listController = require('../../controllers/listController');

describe('Testando a funcão getAll:', () => {
  describe('Quando não existe nenhuma tarefa:', () => {
    const req = {};
    const res = {};

    const resultExecute = [];

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);

      sinon.stub(listService, 'getAll')
        .resolves(resultExecute);
    });

    afterEach(() => listService.getAll.restore());

    it('retorna status "200"', async () => {
      await listController.getAll(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('retorna um json com array vazio', async () => {
      await listController.getAll(req, res);

      expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });

  describe('Quando existem tarefas:', () => {
    const req = {};
    const res = {};

    const date = new Date('2011-08-01T19:58:00.000Z');

    const resultExecute = [{
      id: 1,
      task_list: 'Task example 1',
      status: 'pendente',
      date,
    },
    {
      id: 2,
      task_list: 'Task example 3',
      status: 'em andamento',
      date,
    },
    {
      id: 3,
      task_list: 'Task example 3',
      status: 'pronto',
      date,
    },
    ];

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);

      sinon.stub(listService, 'getAll')
        .resolves(resultExecute);
    });

    afterEach(() => listService.getAll.restore());

    it('retorna status "200"', async () => {
      await listController.getAll(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('retorna um json com os dados', async () => {
      await listController.getAll(req, res);

      expect(res.json.calledWith(resultExecute)).to.be.equal(true);
    });
  });
});

describe('Testando a funcão createTask:', () => {
  describe('Quando cria a tarefa:', () => {
    const req = { body: { task: 'Task example 1', status: 'pendente' } };
    const res = {};

    const date = new Date('2011-08-01T19:58:00.000Z');

    const resultExecute = [{
      id: 1,
      task_list: 'Task example 1',
      status: 'pendente',
      date,
    }];

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);

      sinon.stub(listService, 'createTask')
        .resolves(resultExecute);
    });

    afterEach(() => listService.createTask.restore());

    it('retorna status "201"', async () => {
      await listController.createTask(req, res);

      expect(res.status.calledWith(201)).to.be.equal(true);
    });

    it('retorna um json com a nova tarefa', async () => {
      await listController.createTask(req, res);

      expect(res.json.calledWith(resultExecute)).to.be.equal(true);
    });
  });
});

describe('Testando a funcão updateTask:', () => {
  describe('Quando altera a tarefa:', () => {
    const req = { body: { task: 'Task example 1', status: 'pendente' }, params: { id: 1 } };
    const res = {};

    const resultExecute = [];

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);

      sinon.stub(listService, 'updateTask')
        .resolves(resultExecute);
    });

    afterEach(() => listService.updateTask.restore());

    it('retorna status "200"', async () => {
      await listController.updateTask(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('retorna um uma mensagem com a tarefa alterada', async () => {
      await listController.updateTask(req, res);

      expect(res.json.calledWith({ message: 'Task successfully changed' })).to.be.equal(true);
    });
  });
});

describe('Testando a funcão deleteTask:', () => {
  describe('Quando deleta a tarefa:', () => {
    const req = { params: { id: 1 } };
    const res = {};

    const resultExecute = [];

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);

      sinon.stub(listService, 'deleteTask')
        .resolves(resultExecute);
    });

    afterEach(() => listService.deleteTask.restore());

    it('retorna status "200"', async () => {
      await listController.deleteTask(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('retorna um uma mensagem com a tarefa deletada', async () => {
      await listController.deleteTask(req, res);

      expect(res.json.calledWith({ message: 'Task deleted successfully' })).to.be.equal(true);
    });
  });
});
