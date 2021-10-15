import { registerMicroApps, start } from 'qiankun'

export const useQiankun = () => {

  let apps = [
    {
      name: 'vueApp', // app name registered
      entry: '//localhost:8090',
      container: '#appContainer',
      activeRule: '/app1',
    },
    {
      name: 'reactApp',
      entry: '//localhost:8091',
      container: '#appContainer',
      activeRule: '/app2',
    }
  ]

  registerMicroApps(apps, {
    beforeLoad: [
      app => {
        console.log(`${app.name}的beforeLoad阶段`)
      }
    ],
    beforeMount: [
      app => {
        console.log(`${app.name}的beforeMount阶段`)
      }
    ],
    afterMount: [
      app => {
        console.log(`${app.name}的afterMount阶段`)
      }
    ],
    beforeUnmount: [
      app => {
        console.log(`${app.name}的beforeUnmount阶段`)
      }
    ],
    afterUnmount: [
      app => {
        console.log(`${app.name}的afterUnmount阶段`)
      }
    ]
  });

  start()
}

