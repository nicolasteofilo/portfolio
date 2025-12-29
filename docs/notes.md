# Como criar novos posts na secao de notes

Este projeto usa MDX para cada note. Os posts ficam em uma pasta dedicada dentro de `src/app/notes/(notes)` e sao carregados automaticamente pelo loader em `src/data/notes.ts`.

## Estrutura de pastas

Crie uma nova pasta com o slug do post e adicione um `page.mdx` dentro dela:

```
src/app/notes/(notes)/meu-novo-post/page.mdx
```

O slug do post vem do nome da pasta (`meu-novo-post`).

## Template base

Copie o formato abaixo (ou duplique `src/app/notes/(notes)/primeiros-passos/page.mdx`) e ajuste os campos:

```mdx
export const noteMeta = {
  title: "Titulo do post",
  description: "Resumo curto do que a note aborda.",
  date: "YYYY-MM-DD",
  language: "Portuguese",
};

export const metadata = {
  title: noteMeta.title,
  description: noteMeta.description,
};

# Titulo do post

Conteudo em MDX...
```

## Campos obrigatorios

- `title`: aparece no card/listagem e como titulo da pagina.
- `description`: aparece na listagem de notes.
- `date`: formato ISO (`YYYY-MM-DD`); define a ordem (mais recente primeiro).
- `language`: somente `"English"` ou `"Portuguese"`.

## Checklist rapido

- O arquivo precisa se chamar `page.mdx`.
- A pasta precisa estar diretamente dentro de `src/app/notes/(notes)`.
- `noteMeta` deve existir; sem ele o post nao aparece na listagem.
