import Script from 'next/script'
import Head from 'next/head'

const ArtBoard = () => {
return (
<div>

  <Head>
    <title>Coloring Pages</title>
    <link href="https://codepen.io/MacEvelly/pen/iJGCw.css" rel="stylesheet" />
  </Head>
  <div className='artboard_section'>
    <div className='holder'>
      <div className='myTitle'>Sawan Coloring Pages</div>
      <div className='held' id='ActivityDIV'></div>
      <div className='held'>
        <a id="btnRandom" className="button gray">Random Color</a>
        <a id="btnClear" className="button gray ">Clear Color</a>
        <a id="btnDownloadSVG" className="button gray">Download SVG</a>
      </div>
    </div>
  </div>
  <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js" strategy="beforeInteractive"></Script>
  <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" strategy="beforeInteractive"></Script>
  <Script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/DrawSVGPlugin.js?r=11" strategy="beforeInteractive"></Script>
  <Script id="my-script" src ='/art.js'>
</Script>
</div>

)
}
export default ArtBoard