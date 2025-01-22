const express = require('express');
const app = express();
const PORT = 3002;

app.get('/', (req, res) => {
    res.send('API rodando no domínio apiiatolearn.labstark.com.br via Nginx!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
