export interface ExperienceData {
    company: string;
    name: string;
    span: string;
    description: string;
    worker: string;
    img: string; // Assuming img is a URL or file path
  }


export const experience : ExperienceData[] = [{
    company: "Reprograma",
    name: "Reprograma | Professora",
    span: "São Paulo - Brasil | mai de 2023 - o momento",
    description: "A Reprograma é uma ONG que tem como missão empoderar mulheres, ministrando um curso intensivo.",
    worker:"Administrei cursos de front-end, workshops, e cursos POO em Python",
    img:"/reprograma-logo.0bc8e5eb.png"
},{
    company: "Proz",
    name: "Proz | Front-end",
    span: "São Paulo - Brasil | jul de 2023 - ago 2023",
    description: "Empresa do ramo de educação técnicos",
    worker:"Atuei com front-end no desenvolvimento do ERP interno da instituição",
    img:"/logotipo_proz.svg"
},
{
    company: "DIO",
    name: "DIO.me | Front-end e Django",
    span: "Online - Brasil | abri de 2021 - abri 2023",
    description: "Empresa do ramo de educação e bootcamps",
    worker:"Responsável pela evolução do produto, plataforma e experiências digitais atuando no time de Product, Technology and Data. Atuando diariamente com as linguagens Python, AWS, React, TypeScript, Redux, Hooks.",
    img:"/logo-dio.svg"
},
{
    company: "Codivas",
    name: "Codivas | Front-end",
    span: "Freelance - Brasil | fev de 2021 - mar 2021",
    description: "Coletivo de Mulheres voltado para empoderamento e empregabilidade",
    worker:"Atuei no desenvolvimento Front-end freelance no projeto da empresa Bio Doctor, a minha parte ficou recarregada de fazer rebranding visual do site, utilizando CSS, HTML e JS.",
    img:"/coletivo_codivas_logo.jpeg"
},
{
    company: "RHS",
    name: "RHS | Back-end PHP",
    span: "Online - Brasil | ago de 2020 - jan 2021",
    description: "Administração pública, defesa e seguridade social, voltado para licitações",
    worker:"Manutenção scripts PHP (laravel) para automações processos internos",
    img:"/rhs_licitaes_logo.jpeg"
},
{
    company: "Braz Cubas",
    name: "Braz Cubas | Técnica de Laboratório",
    span: "Mogi das Cruzes - Brasil | Fev de 2015 - ago 2020",
    description: "Universidade",
    worker:"Mentoria em análise de dados dos projetos dos alunos, participação junto com os professores em aulas práticas de laboratório. ",
    img:"/brazcubasoficial_logo.jpeg"
},
]