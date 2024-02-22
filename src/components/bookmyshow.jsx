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
                <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MzYuMksgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00379050-nncvqtgwdr-portrait.jpg" alt=""/>
                <h3>Crakk - Jeetegaa Toh Jiyegaa</h3>
                <p>Action/Thriller</p>
            </div>
            <div class="section"><img
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MzVLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00384444-hgdnnbkwhb-portrait.jpg" alt=""/>
                <h3>Article 370</h3>
                <p>Drama/Political</p>
            </div>
            <div class="section">
                <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICA0OC40SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00379479-dzdubkdgum-portrait.jpg" alt=""/>
                <h3>Premalu</h3>
                <p>Comedy/Romantic</p>
            </div>
            <div class="section">
                <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTA5LjNLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00388033-zbwdafumem-portrait.jpg" alt="" />
                <h3>Demon Slayer: Kimetsu No Yaiba - To The Hashira Training</h3>
                <p>Action/Adventure/Anime</p>
            </div>

        </div>





    </div>
        </div>
     );
}
 
export default Bookmyshow;