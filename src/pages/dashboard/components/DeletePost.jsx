import { useParams, useNavigate } from 'react-router-dom'
import api from '../../../services/api/Api'

export default function DeletePost () {
const navigate = useNavigate()
    const id = useParams().id
    // console.log('ok')
    if (id) {
        api.delete(`/api/post/${id}`).then(response => {
            console.log(response.data)
            navigate('/dashboard/posted')
        }).catch(err => {
            console.log(err.response)
            navigate('/dashboard/posted')
        })
    } else {
    
    }
   
}