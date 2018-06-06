import axios from 'axios'
import * as qs from 'qs'
export const baseUrl = ''

export default async(url: string, params: object = {}, method: string = 'POST', isUpload: boolean = false): Promise<any> => {
	method = method.toUpperCase()
	if (method === 'GET') {
		let dataStr = ''
		Object.keys(params).forEach(key => {
			dataStr += key + '=' + params[key] + '&'
		})
		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
			url = url + '?' + dataStr
		}
		const res = await axios.get(url)
		return res.data
	}else if(method === 'POST') {
		const base = { 
			transformRequest: [
			(data: any) => qs.stringify(data) 
		]}
		const upload = { 
			headers: { 'Content-Type': 'multipart/form-data' }
		}
		const res = await axios.post(url, params, isUpload ? upload : base)
		return res.data
	}
}