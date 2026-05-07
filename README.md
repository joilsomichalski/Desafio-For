# Pesquisa de contato em lista

Aplicação simples de busca de contatos desenvolvida com **HTML**, **CSS** e **JavaScript**, usando arrays, objetos e estrutura de repetição `for`.

## Demonstração

Acesse o projeto online: [pesquisa-de-contato-em-lista.vercel.app](https://pesquisa-de-contato-em-lista.vercel.app)

## Visão geral

O usuário digita um nome e a aplicação percorre uma lista de contatos para verificar se existe uma correspondência. Quando encontra o contato, exibe nome e telefone; quando não encontra, mostra uma mensagem de aviso.

## Funcionalidades

- Pesquisa de contato pelo nome
- Validação de campo vazio
- Exibição de contato encontrado
- Mensagem para contato não cadastrado
- Comparação de textos ignorando maiúsculas e minúsculas
- Feedback direto na tela

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

## Conceitos praticados

- Seleção de elementos com `querySelector`
- Eventos de clique
- Arrays e objetos
- Estrutura de repetição `for`
- Condicionais com `if` e `else`
- Manipulação de conteúdo com `innerHTML`
- Comparação de textos com `toLowerCase()`
- Validação de campo vazio com `trim()`

## Exemplo de funcionamento

Ao digitar um nome cadastrado, como `Ana`, o resultado aparece assim:

```txt
Nome: Ana
Tel: (47) 9959-7853
```

Se o nome não estiver cadastrado, aparece a mensagem:

```txt
Contato não registrado na base de dados.
```

Se o usuário clicar no botão sem digitar nada, aparece:

```txt
Por favor, digite um nome antes.
```

## Melhorias planejadas

- Permitir cadastro de novos contatos pela interface
- Mostrar uma lista completa de contatos cadastrados
- Melhorar acessibilidade do formulário
- Separar dados e lógica em arquivos diferentes

## Autor

Desenvolvido por [Joilso Michalski](https://github.com/joilsomichalski).
