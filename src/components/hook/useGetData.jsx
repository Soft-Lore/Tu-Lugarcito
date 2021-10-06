import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useGetData(url) {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(url)
        .then(response => response.data)
        .then(resp => {
            if(resp.ok)setData(resp)
        })
    }, [url])

    return {
        data
    }
}
