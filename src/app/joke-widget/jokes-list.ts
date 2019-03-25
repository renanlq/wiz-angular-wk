export const JOKES_LIST: Joke[] = [
    {
        title: 'O garoto apanhou da vizinha',
        text: 'O garoto apanhou da vizinha, e a mãe furiosa foi tomar satisfação: Por que a senhora bateu no meu filho? Ele foi mal-educado, e me chamou de gorda. E a senhora acha que vai emagrecer batendo nele?'
    },
    {
        title: 'Banho de louco',
        text: 'Porque o louco toma banho com o chuveiro desligado? Por que ele comprou um champô para cabelos secos!'
    },
    {
        title: 'Menino vai pro céu',
        text: 'A professora pergunta para os alunos: - Quem é que quer ir par ao céu? Todos levantam a mão, menos o Joãozinho. - E você Joãozinho? Não quer ir para o céu? - Querer eu quero, mas a minha mãe falou que depois da aula era para eu ir direto para casa!'
    },
    {
        title: 'Advogado e o seguro',
        text: 'Um advogado e um engenheiro estão pescando no Caribe. O advogado comenta: - Estou aqui porque minha casa foi destruída num incêndio com tudo que estava dentro. O seguro pagou tudo. - Que coincidência! - diz o engenheiro. - Minha casa também foi destruída num terremoto e perdi tudo. E o seguro pagou tudo. O advogado olha intrigado para o engenheiro e pergunta: - Como você faz para provocar um terremoto?'
    }
];

export interface Joke {
    title: string;
    text: string;
}