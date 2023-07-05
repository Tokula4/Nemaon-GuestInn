
import React from "react";
import YouTube from "react-youtube";
  
export default class Nemonvideopage 
extends React.Component {
  render() {
    const opts = {
     
      playerVars: {
        autoplay: 1,
      },
    };
  
    return (
        

      <div>
        
        <YouTube  className="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
           videoId="_TKzTeuZMMQ" 
            opts={opts} onReady={this._onReady} />
      </div>


      

    );
  }
  
  _onReady(event) {
    event.target.pauseVideo();
  }
}