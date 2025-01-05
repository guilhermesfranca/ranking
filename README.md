# Os Homens Mais Ricos do Mundo - 2025

Este repositório contém um projeto desenvolvido com **React** como parte do meu aprendizado inicial na linguagem e no desenvolvimento de interfaces com **Tailwind CSS**. O objetivo é apresentar uma página que lista os homens mais ricos do mundo em 2025, destacando informações como nome, posição no ranking, fortuna, cargos principais e uma imagem de avatar.

## Funcionalidades

- **Componentização**: A aplicação é composta por componentes reutilizáveis, como o componente `Person`, que representa cada bilionário.
- **Estilização com Tailwind CSS**: A estilização foi feita utilizando classes utilitárias do Tailwind CSS, proporcionando uma experiência rápida e responsiva.
- **Design responsivo**: O layout utiliza `flex` e `flex-wrap` para garantir que os elementos sejam exibidos de forma adequada em diferentes tamanhos de tela.

## Estrutura do Projeto

### Componente Principal: `Page`
O componente principal da página exibe o título e a lista de bilionários.

#### Destaques:
- Uso de uma `div` com classes do Tailwind para centralizar e estilizar os elementos.
- Importação do componente `Person` para representar cada bilionário na lista.

```jsx
const Page = () => {
  return (
    <div className="bg-gray-900 h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl m-4">Os homens mais ricos do Mundo</h1>
        <h3 className="text-2xl font-bold">em <span className="text-3xl text-blue-600">2025</span></h3>
      </div>
      <div className="flex flex-wrap">
        <Person ... />  {/* Exemplo de componente Person */}
      </div>
    </div>
  );
};
```

### Componente Secundário: `Person`
Este componente representa as informações de cada bilionário, incluindo:
- **Nome**
- **Imagem de avatar** (ou um avatar padrão, caso não seja fornecido)
- **Cargos principais**
- **Posição no ranking**
- **Fortuna**

#### Destaques:
- Uso de `props` para personalização do componente.
- Classe `object-cover` para garantir que as imagens sejam exibidas de forma consistente dentro do contêiner.
- Avatar padrão definido para casos em que nenhuma imagem é fornecida.

```tsx
type Props = {
    name: string;
    avatar?: string;
    roles: string[];
    ranking: number;
    fortuna: number;
};

export const Person = ({
    name,
    avatar = 'https://static.vecteezy.com/ti/vetor-gratis/p1/9292244-default-avatar-icon-vector-of-social-media-user-vetor.jpg',
    roles,
    ranking,
    fortuna,
}: Props) => {

    return (
        <div className="border-cyan-500 border p-2 rounded-lg bg-black flex flex-col justify-center items-center text-center m-2">
            <h1 className="text-3xl font-bold">{name}</h1>
            <img className="w-[400px] h-[450px] object-top object-cover p-3" src={avatar} alt={name} />
            <p className="text-lg font-bold font-sans pt-4">Posição: {ranking}</p>
            <p className="text-lg font-bold font-sans pt-4">Fortuna: US$ {fortuna} Bilhões</p>
            <ul className="m-2">
                {roles.map((role, index) => (
                    <li key={index}>{role}</li>
                ))}
            </ul>
        </div>
    );
};
```

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface.
- **Tailwind CSS**: Framework de estilização utilitário.

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/mais-ricos-do-mundo.git
   cd mais-ricos-do-mundo
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra o navegador em [http://localhost:3000](http://localhost:3000) para visualizar o projeto.

## Próximos Passos

- Melhorar a responsividade da página para dispositivos móveis.
- Adicionar interatividade, como filtros ou buscas.
- Integrar uma API para atualizar os dados em tempo real.

---

Este projeto é uma introdução ao desenvolvimento com React. Fique à vontade para contribuir ou sugerir melhorias!

