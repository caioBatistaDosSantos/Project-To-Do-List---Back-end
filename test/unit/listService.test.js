/* eslint-disable no-undef */
const { expect } = require('chai');
const sinon = require('sinon');
const { List } = require('../../models');
const listService = require('../../services/listService');

describe('Testando a funcão getAll:', () => {
  describe('Quando não existe nenhuma tarefa:', () => {
    const resultExecute = [];

    beforeEach(() => {
      sinon.stub(List, 'findAll')
        .resolves(resultExecute);
    });

    afterEach(() => List.findAll.restore());

    it('retorna um array', async () => {
      const result = await listService.getAll();

      expect(result).to.be.an('array');
    });

    it('o array esta vazio', async () => {
      const result = await listService.getAll();

      expect(result).to.be.empty;
    });
  });

  describe('Quando existem tarefas:', () => {
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
      sinon.stub(List, 'findAll')
        .resolves(resultExecute);
    });

    afterEach(() => List.findAll.restore());

    it('retorna um array', async () => {
      const result = await listService.getAll();

      expect(result).to.be.an('array');
    });

    it('o array não esta vazio', async () => {
      const result = await listService.getAll();

      expect(result).to.be.not.empty;
    });

    it('o array possui objetos', async () => {
      const result = await listService.getAll();

      result.map((element) => {
        expect(element).to.be.an('object');
      });
    });

    it('os objetos possuem as propriedades id, task_list, status e date', async () => {
      const result = await listService.getAll();

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
