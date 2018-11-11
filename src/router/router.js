//一级路由
import Login from '@/components/Login'
import Register from '@/components/Register'
import SystemHome from '@/components/SystemHome'

//二级路由
import VehicleManagement from '@/components/Home/VehicleManagement'
import HistoryOrder from '@/components/Home/HistoryOrder'
import SystemSetting from '@/components/Home/SystemSetting'

export const routes = [
  {
    path:'/',
    name:'indexLink',
    redirect:'/home'
  },
  {
    path:'/login',
    name:'loginLink',
    component:Login
  },
  {
    path:'/register',
    name:'registerLink',
    component:Register
  },
  {
    path:'/home',
    name:'homeLink',
    redirect:'/home/vehicleManagement'
    ,component:SystemHome,
    children:[
      {
        path:'/home/vehicleManagement',
        name:'vehicleManagementLink',
        component:VehicleManagement,
        meta:{
          requireLogin:true
        }
      },
      {
        path:'/home/historyOrder',
        name:'historyOrderLink',
        component:HistoryOrder,
        meta:{
          requireLogin:true
        }
      },
      {
        path:'/home/systemSetting',
        name:'systemSetting',
        component:SystemSetting,
        meta:{
          requireLogin:true
        }
      }
  ]}
]
