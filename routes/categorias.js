const express = require('express');
const router = express.Router();
//database import
const categoria = require('../data/database.js');

router.get('/:nome', (req, res) => {
    const { nome } = req.params;
    let teste = categoria.filter(u => u.categoria.toLowerCase() === nome.toLowerCase());
    return res.json(teste);
});

router.get('/', (req, res) => {
    return res.json(categoria);
});

router.post('/', (req, res) => {
    const { categoria: nomeCategoria, nome, descricao, valor, imagem } = req.body;
    if (!nomeCategoria || !nome || !descricao || valor === undefined || !imagem) {
        return res.status(400).json({ error: 'os campos categoria, nome, descricao, valor e imagem sao obrigatorios' });
    }
    const catIndex = categoria.findIndex(c => c.categoria.toLowerCase() === nomeCategoria.toLowerCase());
    if (catIndex === -1) {
        return res.status(404).json({ error: 'categoria nao encontrada.' });
    }
    const itens = categoria[catIndex].itens || [];
    const itemExiste = itens.some(i => i.nome.toLowerCase() === nome.toLowerCase());
    if (itemExiste) {
        return res.status(400).json({ error: 'esse item ja existe na categoria.' });
    }

    const id = (Math.random() * (999999999 - 100000000) + 100000000).toFixed(0);
    const novoItem = { id, nome, descricao, valor, imagem };

    itens.push(novoItem);
    categoria[catIndex].itens = itens;

    return res.status(201).json(novoItem);
});

router.put('/:categoria', (req, res) => {
    const { categoria: nomeCategoria } = req.params;
    const dadosAtualizados = req.body;
    const index = categoria.findIndex(c => c.categoria.toLowerCase() === nomeCategoria.toLowerCase());
    if (index === -1) {
        return res.status(404).json({ mensagem: 'categoria nao encontrada' });
    }
    categoria[index] = {
        ...categoria[index],
        ...dadosAtualizados
    };
    return res.status(200).json({ categoria: categoria[index] });
});

router.delete('/:categoria', (req, res) => {
    const nomeCategoria = req.params.categoria.toLowerCase();
    const index = categoria.findIndex(c => c.categoria.toLowerCase() === nomeCategoria);
    if (index === -1) {
        return res.status(404).json({ mensagem: 'categoria nao encontrada' });
    }
    const removida = categoria.splice(index, 1);
    return res.status(200).json({ categoria: removida[0] });
});

module.exports = router;
