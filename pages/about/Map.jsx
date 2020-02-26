import {useEffect } from 'react'
export default () => {
    useEffect(() => {
      renderMap();
    });
  
    function renderMap() {
      const map = new window.BMap.Map("local");
      addMapControl(map);
      drawMe(map);
    }
    function addMapControl(map) {
      map.enableScrollWheelZoom(true);
    }
  
    function drawMe(map) {
      let Point = new window.BMap.Point(106.508204, 29.613892);
      let myIcon = new BMap.Icon("/local.png", new window.BMap.Size(28, 28), {
        imageSize: new window.BMap.Size(28, 28)
      });
      let Marker = new window.BMap.Marker(Point, { icon: myIcon });
      Marker.setAnimation(BMAP_ANIMATION_BOUNCE);
      map.addOverlay(Marker);
      map.centerAndZoom(Point, 16);
    }
    return (
      <div className="map">
        <div className="title">I'm Here</div>
        <div id="local"/>
        <style jsx>{`
          .map {
            position: relative;
          }
          .title {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-size: 24px;
            font-family: "Damion";
            color: var(--text-color);
            background-color:rgba(255,255,255,.8);
            z-index:999;
          }
          #local {
            width: 100%;
            height: 300px;
          }
        `}</style>
      </div>
    );
  }