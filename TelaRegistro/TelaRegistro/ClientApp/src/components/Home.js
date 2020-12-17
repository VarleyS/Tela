import React, { Component } from 'react';

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
      <div>
        <h1>Bem vindo a tela inicial!</h1>
        <p>Bem-vindo ao seu novo aplicativo de pagina unica, desenvolvido com:</p>
        <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> e <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> para codigo de plataforma cruzada do lado do servidor.</li>
          <li><a href='https://facebook.github.io/react/'>React</a> ao codigo do lado do cliente.</li>
          <li><a href='http://getbootstrap.com/'>Bootstrap</a> para layout e estilo</li>
        </ul>
        <p> Para ajuda-lo a comecar, tambem configuramos: </p>
        <ul>
          <li><strong>Navegacao do lado cliente</strong>. Para exemplo, clique em <em>Counter</em> e depois <em>Back</em> para retornar aqui.</li>
          <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
          <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
        </ul>
        <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
      </div>
    );
  }
}
