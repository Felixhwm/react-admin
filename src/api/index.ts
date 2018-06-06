import fetch from './axios'
// 公共
export const getMenu = (params?: any): any => fetch('/api/user/menu', params, 'POST')