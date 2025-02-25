// scripts/populate_db.js
const mongoose = require('mongoose');
const Ong = require('../models/Ong');

// Dados iniciais
const dados = [
    {
            "nome": "Associação Beneficente Vida Nova",
            "projetos": [
              {
                "nome": "Campanha de Alimentação Solidária",
                "descricao": "Distribuição de cestas básicas para famílias em situação de vulnerabilidade.",
                "responsavel": "Ana Silva",
                "status": "Em andamento"
              },
              {
                "nome": "Oficinas de Capacitação Profissional",
                "descricao": "Treinamento em habilidades técnicas para jovens em busca de emprego.",
                "responsavel": "Carlos Santos",
                "status": "Concluído"
              },
              {
                "nome": "Projeto de Reciclagem e Sustentabilidade",
                "descricao": "Incentivo à reciclagem e conscientização ambiental na comunidade local.",
                "responsavel": "Mariana Oliveira",
                "status": "Em andamento"
              },
              {
                "nome": "Campanha de Doação de Material Escolar",
                "descricao": "Arrecadação e distribuição de materiais escolares para crianças carentes.",
                "responsavel": "Fernando Souza",
                "status": "Planejamento"
              },
              {
                "nome": "Reforma e Manutenção de Espaços Públicos",
                "descricao": "Melhoria de praças e áreas de convivência comunitária.",
                "responsavel": "Luciana Mendes",
                "status": "Concluído"
              },
              {
                "nome": "Projeto de Inclusão Digital",
                "descricao": "Acesso gratuito a cursos de informática básica para adultos da terceira idade.",
                "responsavel": "Paulo Lima",
                "status": "Em andamento"
              },
              {
                "nome": "Campanha de Vacinação Contra Gripe",
                "descricao": "Vacinação em massa contra a gripe para idosos e grupos de risco.",
                "responsavel": "Camila Costa",
                "status": "Concluído"
              },
              {
                "nome": "Programa de Voluntariado Jovem",
                "descricao": "Engajamento de jovens em atividades de apoio social e ambiental.",
                "responsavel": "Gabriel Pereira",
                "status": "Em andamento"
              },
              {
                "nome": "Projeto de Horta Comunitária",
                "descricao": "Implantação de horta orgânica para subsistência e educação alimentar.",
                "responsavel": "Isabela Oliveira",
                "status": "Planejamento"
              },
              {
                "nome": "Curso de Primeiros Socorros",
                "descricao": "Treinamento em primeiros socorros para membros da comunidade.",
                "responsavel": "Rafaela Santos",
                "status": "Em andamento"
              }
            ]
          },
          {
            "nome": "Fundação Cidadania Plena",
            "projetos": [
              {
                "nome": "Programa de Apoio a Idosos",
                "descricao": "Visitas domiciliares e atividades recreativas para idosos em lares de acolhimento.",
                "responsavel": "Luiz Gonzaga",
                "status": "Concluído"
              },
              {
                "nome": "Curso de Alfabetização para Adultos",
                "descricao": "Ensino básico de leitura e escrita para adultos não alfabetizados.",
                "responsavel": "Juliana Castro",
                "status": "Em andamento"
              },
              {
                "nome": "Reforma de Espaços Esportivos",
                "descricao": "Restauração de quadras esportivas para incentivar a prática de esportes na comunidade.",
                "responsavel": "André Almeida",
                "status": "Em andamento"
              },
              {
                "nome": "Campanha de Arrecadação de Roupas",
                "descricao": "Doação de roupas usadas para famílias de baixa renda.",
                "responsavel": "Carla Mendonça",
                "status": "Concluído"
              },
              {
                "nome": "Projeto de Artesanato Sustentável",
                "descricao": "Capacitação em artesanato com materiais reciclados para geração de renda.",
                "responsavel": "Roberto Gomes",
                "status": "Planejamento"
              },
              {
                "nome": "Curso de Informática Básica",
                "descricao": "Aulas de informática para jovens em busca de qualificação profissional.",
                "responsavel": "Patrícia Lima",
                "status": "Em andamento"
              },
              {
                "nome": "Apoio Psicológico a Familiares de Pacientes",
                "descricao": "Atendimento psicológico para familiares de pacientes em tratamento médico prolongado.",
                "responsavel": "Ana Beatriz",
                "status": "Em andamento"
              },
              {
                "nome": "Campanha de Prevenção ao Bullying",
                "descricao": "Palestras educativas e conscientização sobre bullying nas escolas locais.",
                "responsavel": "Rodrigo Costa",
                "status": "Concluído"
              },
              {
                "nome": "Projeto de Fotografia Documental",
                "descricao": "Workshops de fotografia para registro da cultura local.",
                "responsavel": "Laura Fernandes",
                "status": "Planejamento"
              },
              {
                "nome": "Campanha de Adoção Responsável de Animais",
                "descricao": "Incentivo à adoção de animais abandonados e cuidados responsáveis.",
                "responsavel": "Daniel Oliveira",
                "status": "Em andamento"
              }
            ]
          },
          {
            "nome": "Instituto Viva Esperança",
            "projetos": [
              {
                "nome": "Curso de Culinária Saudável",
                "descricao": "Aulas de culinária com foco em alimentação saudável e econômica para famílias de baixa renda.",
                "responsavel": "Amanda Costa",
                "status": "Em andamento"
              },
              {
                "nome": "Campanha de Doação de Brinquedos",
                "descricao": "Arrecadação e distribuição de brinquedos para crianças carentes no Natal.",
                "responsavel": "Eduardo Rodrigues",
                "status": "Concluído"
              },
              {
                "nome": "Projeto de Limpeza de Praças",
                "descricao": "Ações de limpeza e manutenção de praças públicas.",
                "responsavel": "Marcos Oliveira",
                "status": "Em andamento"
              },
              {
                "nome": "Campanha de Conscientização Ambiental",
                "descricao": "Educação ambiental nas escolas e comunidades sobre preservação da natureza.",
                "responsavel": "Cristina Santos",
                "status": "Planejamento"
              },
              {
                "nome": "Reforma de Escolas Públicas",
                "descricao": "Melhoria da infraestrutura escolar para melhor qualidade de ensino.",
                "responsavel": "Renata Alves",
                "status": "Concluído"
              },
              {
                "nome": "Curso de Inglês para Jovens",
                "descricao": "Aulas de inglês básico gratuitas para adolescentes da comunidade.",
                "responsavel": "Gustavo Ferreira",
                "status": "Em andamento"
              },
              {
                "nome": "Campanha de Vacinação Infantil",
                "descricao": "Imunização de crianças contra doenças preventivas.",
                "responsavel": "Carolina Lima",
                "status": "Concluído"
              },
              {
                "nome": "Projeto de Dança Comunitária",
                "descricao": "Oficinas de dança para integração e lazer na comunidade.",
                "responsavel": "Fernanda Castro",
                "status": "Em andamento"
              },
              {
                "nome": "Curso de Música para Crianças",
                "descricao": "Aulas de música para desenvolvimento artístico e cultural infantil.",
                "responsavel": "Vinícius Santos",
                "status": "Planejamento"
              },
              {
                "nome": "Campanha de Doação de Sangue",
                "descricao": "Mobilização para doação de sangue e conscientização sobre a importância da doação.",
                "responsavel": "Bruno Oliveira",
                "status": "Em andamento"
              }
            ]
          }     
      
];

// Conectar ao MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/ong', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log('Conectado ao MongoDB');

  // Limpar a coleção antes de inserir dados
  await Ong.deleteMany({});

  // Inserir os dados
  await Ong.insertMany(dados);
  console.log('Dados inseridos com sucesso');

  // Fechar a conexão
  mongoose.connection.close();
}).catch(err => {
  console.error('Erro ao conectar ao MongoDB:', err);
});
