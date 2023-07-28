## Spotify clone

Estou desenvolvendo este clone do spotify para testar meus conhecimentos em ReactJS com o Next13 e o tailwindCSS
estou juntando elementos do antigo design com o novo, a fim de deixar a interface de maneira que eu ache mais agradável


![Foto mais recente](/public/assets/readmeimg.png)
![Foto mais recente da rota playlist](/public/assets/readmeimgplaylist.png)


### dia 19:
* Separei as partes da side bar nos seus respectivos componentes. 
* Crie uma lista de musicas estáticas para pode criar playlists com as mesma, enquanto nn uso uma api para isso.
* Usei esses objetos no componente que renderiza as playlists que o usuário tem, cosumindo as informações disponiveis no objeto.
* Além de algumas adições pequenas no design para deixar a experiencia do usuário mais agradável quando navegar pela aplicação

### dia 20:
* Terminei o componente de exibição de playlists na sidebar
* Passei toda a sidebar e a playbar para a página de layout, já que são fixas em toda a aplicação
* Criei um componente que exibe no main da aplicação as principais playlists do usuário
* Além de definir um overflow para cada componente específico, os quais precisam, ao invés da aplicação toda, tornando a experiencia do usuário mais agradável

### dia 21:
* Arrumei alguns pequenos detalhes das funcionalidades que implementei ontem
* Criei os componentes que compoem a parte de Daily mix

### dia 24:
* Criei todo o footer da aplicação, que se consiste na musica atual q está tocando, uma playbar interativa com o state do react, e um botão de volume também interativo.
* Por enquanto essa parte das musicas esta fixa pois nn integrei nenhuma API, no futuro quando terminar o front-end da aplicação pretendo juntar meus conhecimenteos me back-end e tornar essa aplicação ainda mais legal.
* Dei mais uma melhorada no design da aplicação para deixar a experiência do usuário cada vez melhor e mais agradável.

### dia 25

* separei as funcoes em hooks personalizados com o useCallback para um codigo mais limpo e aproveitar mais as funcoes.
* usei o useEffect para carregar infos salvas, state para salvar infos e o local storage para armazenar.
* Agora o volume, o shuffle, o repeat e o tempo da música são salvos no local storage do browser.
* Detalhe: o tempo da música só é salvo quando o usário pausar a "música" (clicar no botão de pause e play que estão dinâmicos caso a playbar sofra alguma ateração)

### dia 27

* Comecei a criar a rota das playlists e me deparei com um problema: Não descobri como tornar a renderizacao do component de platlist dinamica atraves de um valor, que eu imagino q seja passado através da URL, não pensei em outra forma, como não consegui tornar o component dinâmico, resolvi deixar fixo por enquanto e desenvolver a estrutura básica.

* Terminei o header e comecei a parte de renderizar as musicas, continuo com o problema de não conseguir acessar exatamente da playlist que eu quero.
Não postei o print com o component implementado, pois ainda tem algumas coisas do design para arrumar que eu resolvi deixar para amanhã


### dia 28
* Consegui criar uma página de playlist usando as rotas dinâmicas do next e o useParams, assim pegando o valor passado na URL com o chave de 'id' e fazendo um find dentro das playlist para pegar apenas o objeto específico de acordo com o id

* Comecei a estilizar a parte de renderização das músicas 