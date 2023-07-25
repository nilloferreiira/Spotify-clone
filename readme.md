## Spotify clone

Estou desenvolvendo este clone do spotify para testar meus conhecimentos em ReactJS com o Next13 e o tailwindCSS
estou juntando elementos do antigo design com o novo, a fim de deixar a interface de maneira que eu ache mais agradável


![Foto mais recente](/public/assets/readmeimg.png)

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

* separei as funcoes em hooks personalizados com o useCallback para um codigo mais limpo e aproveitar mais as funcoes, usei o useEffect para carregar infos salvas, state para salvar infos e o local storage para armazenar