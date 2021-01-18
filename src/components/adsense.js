import React, { useEffect } from "react"
import useSiteMeta from '../hooks/useSiteMeta'

function Adsense() {
    const site = useSiteMeta()
    
    useEffect(()=>{
        window.onload = function() {(window.adsbygoogle = window.adsbygoogle || []).push({})};   
    })

    return(
        <div style={{padding: 8}}>
            <ins className="adsbygoogle"
                style={{display: "block"}}
                data-ad-client={site.siteMetadata.adsense.adClient}
                data-ad-slot={site.siteMetadata.adsense.adSlot}
                data-ad-format="auto"
                data-full-width-responsive="true">
            </ins>
        </div>
    )
}

export default Adsense