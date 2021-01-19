import React, { useEffect } from "react"
import useSiteMeta from '../hooks/useSiteMeta'

function Adsense() {
    const site = useSiteMeta()
    
    useEffect(()=>{
        window.onload = function() {(adsbygoogle = window.adsbygoogle || []).push({})};   
    })

    return(
        <div>
            <ins class="adsbygoogle"
                style="display:block"
                data-ad-client="ca-pub-5373443176805821"
                data-ad-slot="2323966733"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
        </div>
    )
}

export default Adsense