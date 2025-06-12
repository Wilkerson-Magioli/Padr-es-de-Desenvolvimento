                                                                  PADRÕES DE DESENVOLVIMENTO

                                                                        PADRÃO SINGLETON

                                                                      VISÃO GERAL DE PADRÕES

    •	Padrões de projeto são soluções típicas para problemas comuns em projeto de software. Eles são como plantas de obra pré-fabricadas que você pode customizar 
    para resolver um problema de projeto recorrente em seu código.
    
    •	Os padrões de projeto são um kit de ferramentas para soluções tentadas e testadas para problemas comuns em projeto de software.
    
    •	O padrão não é um pedaço de código específico, mas um conceito geral para resolver um problema em particular.
    
    •	A maioria dos padrões são descritos formalmente para que as pessoas possam reproduzi-los em diferentes contextos. Partes que são geralmente presentes em uma 
    descrição de padrão: Propósito, Motivação, Estrutura e Exemplos de Código.
    
    •	Foi primeiramente descrito por Christopher Alexander em “Uma Linguagem de Padrões”. Depois em 1994 quatro autores: Erich Gamma, John Vlissides, Ralph Johnson,
    e Richard Helm. Eles publicaram “Padrões de Projeto – Soluções Reutilizáveis de Software Orientado a Objetos”. O livro mostrava 23 padrões que resolviam vários
    problemas de projeto orientado a objetos.
    
    •	Padrões de projeto, se tornou muito popular em outros campos 
    de programação, que passaram a existir fora do projeto orientado a objetos.
    
    •	Padrões também são muito criticados. Vejamos aqui algumas das críticas mais comuns: Gambiarras para uma linguagem de programação fraca, Soluções ineficientes, 
    Uso injustificável
    
    •	Classificação dos padrões: Criacionais, Estruturais e Comportamentais.


                                                                  VISÃO GERAL DO PADRÃO SINGLETON

    •	Também conhecido como “Carta Única” é um padrão de projeto criacional que permite a você garantir que uma classe tenha apenas uma instância, enquanto provê um
    ponto de acesso global para essa instância. Ele resolve dois problemas de uma só vez, violando o “Princípio de Responsabilidade Única”.
    
        a)	Garanti que uma classe tenha apenas uma única instância.
        
        b)	Fornece um ponto de acesso global para aquela instância. 
    
    •	Dois passos em comum do Padrão Singleton:
    
        a)	Fazer o construtor padrão privado, para prevenir que outros objetos usem o operador new com a classe singleton.
        
        b)	Criar um método estático de criação que age como um construtor.


                                                            PONTOS FORTES E FRACOS DO PADRÃO SINGLETON

        a)	Pontos Fortes: Certeza de única instância da classe. Ponto de acesso global a uma instância de classe. O objeto é inicializado somente quando for pedido 
        pela primeira vez.
        
        b)	Pontos Fracos: Viola o princípio da responsabilidade única. Pode mascarar um design ruim, por exemplo, quando os componentes do programa sabem muito sobre 
        cada um. Pode ser difícil realizar testes unitários do código cliente, porque muitos frameworks de teste dependem de herança quando produzem objetos simulados. 
        Já que o construtor da classe singleton é privado e sobrescrever métodos estáticos é impossível na maioria das linguagens, você terá que pensar em uma maneira 
        criativa de simular o singleton, ou apenas não escrever os testes.


                                                                          CONCLUSÃO

        Concluo que os padrões de projeto são soluções para os problemas comuns em projeto de software no dia a dia do programador. Vejo que ele traz um padrão, uma 
    uniformidade para os códigos. 
        Sendo um pouco mais ousado, e me perdoem os colegas que vieram do Direito se eu estiver errado, mas comparo os padrões de projeto com uma “Sumula Vinculante”, 
    que é uma decisão de um órgão maior, sobre um assunto constitucional que deve ser seguida por todos os outros órgãos do Judiciário e da administração pública.
    Uniformiza a interpretação da Constituição e garante que todos sigam este entendimento.  
        Apesar de ter vários pontos fracos, ainda acredito que o papel dos padrões de projeto é muito importante para a área da Tecnologia da Informação.
