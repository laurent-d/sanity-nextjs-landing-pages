export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61c4eaac6a7c1ffbe550c1e6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-552cbfbd',
                  apiId: 'fbd1a15f-f7f8-4f2f-997a-b139a3af15c3'
                },
                {
                  buildHookId: '61c4eaac3753454f360bd03c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-cnnd2pw8',
                  apiId: '6d47f014-da78-4a76-8d71-3f4376b1727b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/laurent-d/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-cnnd2pw8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
