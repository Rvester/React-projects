import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Price() {

    const apiKey = "5BD384CD-8BBD-4720-8CEB-CE6E94302D52"

    const params = useParams()   
    const symbol = params.symbol  

    const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`

    const [coin, setCoin] = useState("")

    const getCoin = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setCoin(data)
        } catch(err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getCoin();
    },[])

    const loaded = () => {
        return (
            <div>
                <h1>
                    {coin.asset_id_base}/{coin.asset_id_quote}
                </h1>
                <h2>
                    {coin.rate}
                </h2>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return coin && coin.rate ? loaded() : loading()
}