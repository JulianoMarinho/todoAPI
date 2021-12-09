import { Router } from 'express';

import * as TodoController from '../controllers/todo.controller';

const router = Router();

//pegar todos os itens
router.get('/todo', TodoController.all);
//adicionar uma tarefa nova
router.post('/todo', TodoController.add);
//rota para atualizar uma tarefa
router.put('/todo/:id', TodoController.update);
//deletar
router.delete('/todo/:id', TodoController.remove);

export default router;