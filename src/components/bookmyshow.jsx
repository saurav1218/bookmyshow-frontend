import '../style/bookmyshow.css'

const Bookmyshow = () => {
    return ( 
        <div className="bookmyshow">
          <div class="bms">
        <div class="navbar">
            <div class="img">
                <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt=""/>
            </div>
            <div class="search">
                <input type="text" placeholder="Search for Movies, Events, Plays, Sports and Activities"/>
            </div>
            <div class="city">
                <select>
                    <option value="">Bengaluru</option>
                    <option value="">Mysore</option>
                    <option value="">Ranchi</option>
                </select>
                <button>Sign in</button>
            </div>
        </div>
        <div class="navlink">
            <div class="nav1">
                <a href="">Movies</a>
                <a href="">Streams <sup><sup> NEW</sup></sup> </a>
                <a href="">Events</a>
                <a href="">Plays</a>
                <a href="">Sports</a>
                <a href="">Activities</a>
                <a href="">Buzz</a>
            </div>
            <div class="nav2">
                <a href="">ListYourShow</a>
                <a href="">Corporates</a>
                <a href="">Offers</a>
                <a href="">Gift Card</a>
            </div>
        </div>
        <div class="content">
            <marquee behavior="" scrollamount="20" direction="">
                <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1681123745909_webbannernpa.jpg" alt=""/>
                <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1682509652552_jayblrweb.jpg" alt=""/>
                <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1682503326503_shazamweb.jpg" alt=""/>
            </marquee>
        </div>
        <div class="content1">
            <h1>Recommended Movies</h1>
            <a href="">see All</a>
        </div>

        <div class="content2">
            <div class="section">
                <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICA4OC42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00383266-wrllgjszgu-portrait.jpg" alt="" />
                <h3>Teri Baaton Mein Aisa Uljha jiya</h3>
                <p>Comedy/Family/Romantic</p>
            </div>
            <div class="section">
                <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni44LzEwICA1OS41SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00339118-gvcavdpszx-portrait.jpg" alt=""/>
                <h3>Kisi Ka Bhai Kisi Ki Jaan</h3>
                <p>Action/Comedy/Drama</p>
            </div>
            <div class="section"><img
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS40LzEwICA0Ni4xSyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00346626-vnzlbbnyzy-portrait.jpg" alt=""/>
                <h3>Virupaksha</h3>
                <p>Action/Mystery/Thriller</p>
            </div>
            <div class="section">
                <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTE2LjVLIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00310078-fkyazsqyfj-portrait.jpg" alt=""/>
                <h3>Agent</h3>
                <p>Action/Thriller</p>
            </div>
            <div class="section">
                <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny43LzEwICAxMy4zSyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00349309-kzclvwxuhc-portrait.jpg" alt="" />
                <h3>Evil Dead Rise</h3>
                <p>Fantasy/Horror/Thriller</p>
            </div>

        </div>





    </div>
        </div>
     );
}
 
export default Bookmyshow;