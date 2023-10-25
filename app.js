const jobOffers = [
  {
    role: 'Ejecutivo de Ventas B2B bilingüe  (copia)',
    company: 'VICHARA TECHNOLOGIES',
    location: 'Remoto - Cualquier lugar',
    softSkills: [ 'Cold Prospecting', 'Business Closure', 'B2b Business Relationship' ],
    salary: 'Confidencial',
    perks: [
        { 
          name: 'Medicina prepagada',
          icon: '<img width="15" height="15" src="https://img.icons8.com/material-outlined/24/filled-like.png" alt="filled-like"/>'
        },
        { 
          name: 'Horario flexible',
          icon: '<img width="15" height="15" src="https://img.icons8.com/ios-glyphs/30/womens-watch.png" alt="womens-watch"/>'
        },
        { 
          name: 'Trabajo remoto parcial',
          icon: '<img width="15" height="15" src="https://img.icons8.com/material-outlined/24/marker.png" alt="marker"/>'
        },
        { 
          name: 'Celebración de días especiales',
          icon: '<img width="15" height="15" src="https://img.icons8.com/android/24/cool.png" alt="cool"/>'
        }
    ],
    vacancies: '1',
    publishDate: '1 day ago',
    companyLogo: '<img data-v-00bd6716="" src="https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/4310/vichara.jpeg" alt="Logo empresa" width="70" height="70" class="rounded">'
  },
  {
    role: 'DIRECTOR OPERATIVO DE FARMACIAS / VALLE DEL CAUCA',
    company: 'OFFIMEDICAS S.A',
    location: 'Santiago de Cali',
    softSkills: [ 'Liderazgo', 'Administration', 'Capadidad de Análisis' ],
    salary: '$ 3M - 3.8M COP',
    perks: [
        {
          name: 'Certificaciones',
          icon: '<img width="15" height="15" src="https://img.icons8.com/material-outlined/24/document--v1.png" alt="document--v1"/>'
        },
        {
          name: 'Fiesta de fin de año',
          icon: '<img width="15" height="15" src="https://img.icons8.com/android/24/cool.png" alt="cool"/>'
        },
        {
          name: 'Capacitaciones',
          icon: '<img width="15" height="15" src="https://img.icons8.com/windows/32/clipboard-list.png" alt="clipboard-list"/>'
        }
    ],
    vacancies: '1',
    publishDate: '4 days ago',
    companyLogo: '<img data-v-00bd6716="" src="https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/80893/offiemedicas.png" alt="Logo empresa" width="70" height="70" class="rounded">'
  },
  {
    role: 'Regente de Farmacia / Cali',
    company: 'OFFIMEDICAS S.A',
    location: 'Presencial (Valle)',
    softSkills: [ 'Result Oriented', 'Text Writing', 'Supervisión' ],
    salary: '1.9M COP',
    perks: [
      {
        name: 'Certificaciones',
        icon: '<img width="15" height="15" src="https://img.icons8.com/material-outlined/24/document--v1.png" alt="document--v1"/>'
      },
      {
        name: 'Fiesta de fin de año',
        icon: '<img width="15" height="15" src="https://img.icons8.com/android/24/cool.png" alt="cool"/>'
      },
      {
        name: 'Capacitaciones',
        icon: '<img width="15" height="15" src="https://img.icons8.com/windows/32/clipboard-list.png" alt="clipboard-list"/>'
      }
  ],
    vacancies: '10',
    publishDate: '8 days ago',
    companyLogo: '<img data-v-00bd6716="" src="https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/80893/offiemedicas.png" alt="Logo empresa" width="70" height="70" class="rounded">'
  },
  {
    role: 'Gerente de Cuenta',
    company: 'CCD Compañia de Ciberseguridad y Defensa SAS',
    location: 'Medellín',
    softSkills: [ 'Knowledge In Technology', 'Cybersecurity', 'Consultative Sale' ],
    salary: 'Confidencial',
    perks: [
      { 
        name: 'Celebración de días especiales',
        icon: '<img width="15" height="15" src="https://img.icons8.com/android/24/cool.png" alt="cool"/>'
      },
      {
        name: 'Ambiente de trabajo amigable',
        icon: '<img width="15" height="15" src="https://img.icons8.com/wired/64/groups.png" alt="groups"/>'
      },
      {
        name: 'Fiesta de fin de año',
        icon: '<img width="15" height="15" src="https://img.icons8.com/android/24/cool.png" alt="cool"/>'
      },
      {
        name: 'Día completo o medio día libre en tu cumpleaños',
        icon: '<img width="15" height="15" src="https://img.icons8.com/ios-glyphs/30/womens-watch.png" alt="womens-watch"/>'
      }
    ],
    vacancies: '1',
    publishDate: '6 days ago',
    companyLogo: '<img data-v-00bd6716="" src="https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/518705/cccd.png" alt="Logo empresa" width="70" height="70" class="rounded">'
  },
  {
    role: 'QUIMICO FARMACEUTICO / BUCARAMANGA',
    company: 'OFFIMEDICAS S.A',
    location: 'Bucaramanga',
    softSkills: [ 'Organizational Capacity', 'Resource Management', 'Office Tooks' ],
    salary: '$ 4M - 5M COP',
    perks: [
      {
        name: 'Certificaciones',
        icon: '<img width="15" height="15" src="https://img.icons8.com/material-outlined/24/document--v1.png" alt="document--v1"/>'
      },
      {
        name: 'Fiesta de fin de año',
        icon: '<img width="15" height="15" src="https://img.icons8.com/android/24/cool.png" alt="cool"/>'
      },
      {
        name: 'Capacitaciones',
        icon: '<img width="15" height="15" src="https://img.icons8.com/windows/32/clipboard-list.png" alt="clipboard-list"/>'
      }
    ],
    vacancies: '1',
    publishDate: '7 days ago',
    companyLogo: '<img data-v-00bd6716="" src="https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/80893/offiemedicas.png" alt="Logo empresa" width="70" height="70" class="rounded">'
  },
  {
    role: 'Especialista en Marketing Digital',
    company: 'EDU LABS S.A.S',
    location: 'Remoto en Colombia',
    softSkills: [ 'Seo &Amp; Sem', 'Meta Ads', '<img width="15" height="15" src="https://img.icons8.com/material-rounded/24/google-logo.png" alt="google-logo"/> Google Analitics' ],
    salary: '$ 2M - 2.3M COP',
    vacancies: '1',
    publishDate: '5 days ago',
    companyLogo: '<img data-v-00bd6716="" src="https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/312357/Logo-Edu-Labs-Vertical.png" alt="Logo empresa" width="70" height="70" class="rounded">'
  },
  {
    role: 'Reclutadores Freelance',
    company: 'PeakU Inc.',
    location: 'Remoto',
    softSkills: [ 'Recruitment' ],
    salary: '$ 1M - 2.5M COP',
    perks: [
      {
        name: 'Cursos de inglés',
        icon: '<img width="15" height="15" src="https://img.icons8.com/material-outlined/24/globe--v1.png" alt="globe--v1"/>'
      },
      { 
        name: 'Trabajo remoto',
        icon: '<img width="15" height="15" src="https://img.icons8.com/material-outlined/24/marker.png" alt="marker"/>'
      },
      { 
        name: 'Horario flexible',
        icon: '<img width="15" height="15" src="https://img.icons8.com/ios-glyphs/30/womens-watch.png" alt="womens-watch"/>'
      },
      { 
        name: 'Celebración de días especiales',
        icon: '<img width="15" height="15" src="https://img.icons8.com/android/24/cool.png" alt="cool"/>'
      }

    ],
    vacancies: '50',
    publishDate: '7 days ago',
    companyLogo: '<img data-v-00bd6716="" src="https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/2078/peaku.png" alt="Logo empresa" width="70" height="70" class="rounded">'
  },
  {
    role: 'Auxiliar de Farmacia / Tulua',
    company: 'OFFIMEDICAS S.A',
    location: 'Presencial (Santiago, Tuluá)',
    softSkills: [ 'Technical Knowledge', 'Problem Analysis' ],
    salary: '$ 1.4M COP',
    perks: [
      {
        name: 'Certificaciones',
        icon: '<img width="15" height="15" src="https://img.icons8.com/material-outlined/24/document--v1.png" alt="document--v1"/>'
      },
      {
        name: 'Fiesta de fin de año',
        icon: '<img width="15" height="15" src="https://img.icons8.com/android/24/cool.png" alt="cool"/>'
      },
      {
        name: 'Capacitaciones',
        icon: '<img width="15" height="15" src="https://img.icons8.com/windows/32/clipboard-list.png" alt="clipboard-list"/>'
      }
    ],
    vacancies: '1',
    publishDate: '7 days ago',
    companyLogo: '<img data-v-00bd6716="" src="https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/80893/offiemedicas.png" alt="Logo empresa" width="70" height="70" class="rounded">'
  },
  {
    role: 'Ingeniero senior de infraestructura TI',
    company: 'Intexus',
    location: 'Bogotá',
    softSkills: [ '.Net', 'Devops', 'Database Sql' ],
    salary: '$ 4M - 4.5M COP',
    perks: [
      { 
        name: 'Trabajo remoto parcial',
        icon: '<img width="15" height="15" src="https://img.icons8.com/material-outlined/24/marker.png" alt="marker"/>'
      },
      {
        name: 'Seguros',
        icon: '<img width="15" height="15" src="https://img.icons8.com/windows/32/lock.png" alt="lock"/>'
      },
      {
        name: 'Fiesta de fin de año',
        icon: '<img width="15" height="15" src="https://img.icons8.com/android/24/cool.png" alt="cool"/>'
      }
    ],
    vacancies: '1',
    publishDate: '7 days ago',
    companyLogo: '<img data-v-00bd6716="" src="https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/57746/intexus.JPG" alt="Logo empresa" width="70" height="70" class="rounded">'
  },
  {
    role: 'Product Owner',
    company: 'Be Movil',
    location: 'Remoto en Colombia',
    softSkills: [ 'Tour', 'Agile Mehodologies', 'Product Owner' ],
    salary: '$ 2.5M - $3.2M COP',
    vacancies: '1',
    publishDate: '1 day ago',
    companyLogo: '<img data-v-00bd6716="" src="https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/361854/bemovil.png" alt="Logo empresa" width="70" height="70" class="rounded">'
  },
]

const app = Vue.createApp({
  data() {
    return {
      jobOffers,
    }
  }
})

app.mount('#myApp')