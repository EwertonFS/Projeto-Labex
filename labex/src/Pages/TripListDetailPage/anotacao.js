

//  const [trip,setTrip] = useState()
//  // OLHA PARA URL E tenta pegar essa parametros
//  const params = useParams()
 
//  //useeffect ulltilizado pq quero a requisição assim que atualiza
//  //[] array vazio quero que execute somente uma vez quando a tela rendereniza
//    useEffect(()=>{
//      axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/ewerton-moreira/trip/${params.tripId}`,{
//        headers:{
//          auth:window.localStorage.getItem('token')
//        }
//      }).then((response)=>{
//        setTrip(response.data.trip)
//      })
     
     
//    })