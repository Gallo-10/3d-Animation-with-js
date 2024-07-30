Projeto de Animação 3D
Descrição
Este projeto utiliza a biblioteca Three.js para criar uma animação 3D de um modelo lunar. O modelo é carregado em formato FBX e é iluminado de forma a destacar suas características metálicas e texturas.

Tipos de Geometrias do Modelo
O modelo possui as seguintes geometrias principais:

CM (Command Module): A geometria principal do módulo de comando, com detalhes que representam a estrutura e os componentes do módulo.
Parachute Bay: Representa a seção do módulo onde os paraquedas estão localizados.
Heatshield: A parte inferior do módulo projetada para resistir ao calor durante a reentrada na atmosfera.
Docking Port: O ponto de acoplamento para a conexão com outros módulos ou veículos.
Tipos de Materiais Utilizados
Os materiais aplicados ao modelo são do tipo MeshStandardMaterial, que suporta a renderização de superfícies metálicas e texturizadas. Aqui estão os materiais utilizados:

Material CM:

Textura: CM (com mapa normal CMNRM)
Propriedades: roughness: 0.3, metalness: 1
Material Parachute Cover:

Textura: parachuteCover
Propriedades: roughness: 0.5, metalness: 1
Material Heatshield:

Textura: heatshield (com mapa normal heatshieldNRM)
Propriedades: roughness: 0.5, metalness: 1
Material Docking Port:

Textura: dockingPort
Propriedades: roughness: 0.5, metalness: 0
Arquivos de Textura Utilizados
Os seguintes arquivos de textura são utilizados no modelo:

CM:

bluedog_Apollo_CM.png (Textura do módulo de comando)
bluedog_Apollo_CM_NRM.png (Mapa normal do módulo de comando)
Parachute Cover:

bluedog_Apollo_ParachuteBay.png (Textura da tampa dos paraquedas)
Heatshield:

bluedog_Apollo_Heatshield.png (Textura do escudo térmico)
bluedog_Apollo_Heatshield_NRM.png (Mapa normal do escudo térmico)
Docking Port:

bluedog_Apollo_DockingPort.png (Textura do ponto de acoplamento)
Fontes de Iluminação
O modelo é iluminado por três fontes principais de luz:

Luz Ambiente:

Tipo: AmbientLight
Cor: 0xffffff
Intensidade: 0.5
Proporciona uma iluminação uniforme e suave em toda a cena.
Luz Direcional:

Tipo: DirectionalLight
Cor: 0xffffff
Intensidade: 1
Posicionada para criar uma iluminação principal que destaca as características do modelo.
Luz Direcional Adicional:

Tipo: DirectionalLight
Cor: 0xffffff
Intensidade: 0.5
Posicionada para iluminar o modelo de baixo, criando uma iluminação mais equilibrada e evitando sombras duras.
Imagem do Modelo
