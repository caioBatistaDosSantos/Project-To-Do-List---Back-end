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

  describe.only('Quando existem tarefas:', () => {
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
    const date = new Date('2011-08-01T19:58:00.000Z');

    const resultExecute = [{
      id: 1,
      task_list: 'Task example 1',
      status: 'pendente',
      date,
    }];

    beforeEach(() => {
      sinon.stub(List, 'create')
        .resolves(resultExecute);
    });

    afterEach(() => List.create.restore());

    it('retorna um array', async () => {
      const result = await listService.createTask();

      expect(result).to.be.an('array');
    });

    it('o array não esta vazio', async () => {
      const result = await listService.createTask();

      expect(result).to.be.not.empty;
    });

    it('o array possui objetos', async () => {
      const result = await listService.createTask();

      result.map((element) => {
        expect(element).to.be.an('object');
      });
    });

    it('os objetos possuem as propriedades id, task_list, status e date', async () => {
      const result = await listService.createTask();

      result.map((element) => {
        expect(element).to.be.includes.all.keys(
          'id',
          'task_list',
          'status',
          'date',
        );
      });
    });
  });
});
