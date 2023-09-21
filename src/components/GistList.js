import React, { useEffect, useState } from 'react'
import { getPublicGists } from '../services/gistService'
import Gist from './Gist'
const GistList = (props) => {

    const { searchKey } = props

    const [result, setResult] = useState([])
    const [searchResult, setSearchResult] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        let response = await getPublicGists()
        if (response?.status == 200) {
            setLoading(false)
            setResult(response.data)
            setSearchResult(response.data)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if (searchKey == '') {
            setSearchResult(result)
            return
        }
        let filteredResult = result.filter(item => item?.owner?.login.toLowerCase().includes(searchKey)) //data filtered according to matching string
        setSearchResult(filteredResult)
    }, [searchKey])

    if(loading) return (<div className='container'><h1 className='notFound'>Fetching Data....</h1></div>)
    return (
        <div className='container'>
            {searchResult.length > 0 ?
                searchResult.map((item, i) => {
                    return (
                        <Gist data={item} keyVal={i} />
                    )
                })
                :
                <h1 className='notFound'>Opsss! no such user found.</h1>
            }
        </div>
    )
}

export default GistList
