<p align="center">
  <h2 align="center">Dashboard-gráficos</h2>

  <p align="center">
    Página de dashboard com gráficos interativos
  </p>
</p>

<p align="center">
  <img src="./src/app/shared/assets/doc/dashboard-page-1.png" alt="print da landing page"/>
</p>

---

<h2>Sobre</h2>
<p align="center">
A aplicação é uma landing page que possui em sua tela principal um título e 2 gráficos, sendo um gráfico de barras simples e um gráfico do tipo Scatter.
</p>

<h3 id="techs">Tecnologias</h3>
  
<div>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
</div>

- <p>Os gráficos interativos foram produzidos com a biblioteca <a href="https://apexcharts.com/">Apexcharts</a>, e na estilização foi utilizada a biblioteca <a href="https://styled-components.com/">Styled Components</a>.</p>

---

<h3>Instruções para executar na sua máquina:</h3>

1. Clone o repositório (exemplo SSH) - insira no console:

   ```sh
   git clone git@github.com:felipelouzeiro/dashboard.git
   ```

2. Instale as dependências do projeto:

   ```sh
   cd dashboard/
   npm install
   ```

3. Execute a aplicação:

   ```sh
   npm start
   ```

---

<p>A aplicação possui testes automatizados construídos com <a href="https://jestjs.io/pt-BR/">Jest</a> e <a href="https://testing-library.com/docs/react-testing-library/intro/">React Testing Library</a>.</p>

<h3>Instruções para executar os testes:</h3>

1. Alterne para a branch de desenvolvimento:

   ```sh
   git checkout dashboard-dev
   ```

2. Instale as dependências de teste:

   ```sh
   npm install
   ```

3. Execute os scripts de test:

   ```sh
   npm test

   npm test --coverage
   ```

---

<h3>Fique à vontade para contribuir com melhorias!</h3>

Próximos passos:

- Mais gráficos!
- Filtros!
- Api?

Aqui estão algumas instruções para sua contribuição:

1.  Faça o Fork da aplicação.

2.  Crie a sua ramificação.

```sh
 git checkout -b feature
```

3.  Envie suas alterações.

```sh
git commit -m 'Segue algumas melhorias!'
```

4.  Envie para o repositório remoto.

```sh
git push origin feature
```

5.  Por fim, abra um Pull Request, você pode descrever suas alterações nele.

---

A aplicação está hospedada na plataforma Heroku.

> > [Clique aqui para visualizar a aplicação.](https://dashboard-graphics.herokuapp.com/)
