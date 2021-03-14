export const submit_to_db= (data)=>{
	
	return (dispatch,getState,{getFirebase,getFirestore})=>{
		const firestore=getFirestore();
		firestore.collection('mailtoid').doc(data.email).set({
			id: data.id
		}).then(()=>{
			dispatch({type:'CREATE_PROJECT1'});
		}).catch((err)=>{
			dispatch({type:'CREATE_PROJECT_ERR1'});
		})
		firestore.collection('idtomail').doc(data.id).set({
			email: data.email
		}).then(()=>{
			dispatch({type:'CREATE_PROJECT1'});
		}).catch((err)=>{
			dispatch({type:'CREATE_PROJECT_ERR1'});
		})
		
	}

}

