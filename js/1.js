const p = new Promise(function(resolve, reject){
	setTimeout(()=>{
		console.log('Preparing data...')
		const backendData = {
			server: 'aws',
			port: 2000,
			status: 'working'
		}
		resolve(backendData) // Эмитируем возникшую ошибку

	}, 2000)
}) 

p.then((data)=> {
	return new Promise((resolve, reject)=> {
		setTimeout(() => {
			data.modified = true
			resolve(data)
		}, 2000)
	})
})
	.then((clientData) => {
	console.log('Data received', clientData)
	clientData.fromPromise = true
	return clientData
}).then((data)=> {
	console.log('Modified', data)
}).catch((error)=> {
		console.error('Error: ', error)
	})
