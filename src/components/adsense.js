import React, { Component } from "react"

class Adsense extends Component {

    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <div>
                <ins className="adsbygoogle"
                    style={{ display:"block" }}
                    data-ad-client="ca-pub-5373443176805821"
                    data-ad-slot="2323966733"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
            </div>
        )
    }
}

export default Adsense