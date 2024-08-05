/** @jsxImportSource frog/jsx */
import { SpeedInsights } from "@vercel/speed-insights/next"
import { color } from '@coinbase/onchainkit/theme'
import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'
import { text } from 'node:stream/consumers'

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
  title: 'Frog Frame',
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/', (c) => {
  return c.res({
    action:'/second',
    image: (
      <div
        style={{
          alignItems: 'center',
          backgroundImage: 'url(https://cdn.prod.website-files.com/6267eac265e445963ae53e81/6666d29bb1810344e5fa8bbe_Blog%20-%20Onchain%20Summer%20Buildathon.jpg)',
        backgroundPosition: 'center',
          backgroundSize: '100% 100%',
          fontSize: 40,
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      
      >
        <h1 style={{margin:'-10',}}> </h1>
                 <h1 style={{color:'white',}}>  Top Trending NFT on  </h1>
        <h1 style={{margin:'190',}}> </h1>
                 <h4 style={{color:'white',}}>  Marwaaslam  </h4>
      </div>
    ),
    intents: [
      <Button > Trending NFT</Button>,
    ],
  })
})

app.frame('/second', (c) => {
  return c.res({
    action:'/',
    image: (
      <div
        style={{
          alignItems: 'center',
          backgroundImage: 'url(https://wallet.coinbase.com/_next/image?url=https%3A%2F%2Fctf-images-01.coinbasecdn.net%2Fvoaboiz0ig30%2F7jd4o9tQSvkp4PDvAqELbB%2F0ec45bbede3826c94b114aa262ae5d8e%2FCB_Gif_16x9__1_.gif&w=1920&q=75)',
        backgroundPosition: 'center',
          backgroundSize: '100% 100%',
          fontSize: 50,
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <h1 style={{color:'white', margin:'-10'}}></h1>
       <h4 style={{color:'white',}}>Doodlesᵗᵛ Super Pass (Season 1)</h4> 
       <h1 style={{margin:'170',}}> </h1>
       <h4 style={{color:'white',}}>  Marwaaslam  </h4>
      </div>
    ),
    intents: [
      <Button.Link href='https://wallet.coinbase.com/summer/play?referral_id=ceb39fd3-3382-45a3-9ae9-f8278882fbca&challenge_id=ocsChallenge_f2fdacb8-644a-46ff-9837-e8257a3a4877'> Go to the NFT</Button.Link>,
      <Button> Back </Button>,
    ],
  })
})
app.frame('/third', (c) => {
  return c.res({
    action:'/',
    image: (
      <div
        style={{
          alignItems: 'center',
          backgroundImage: 'url()',
        backgroundPosition: 'center',
          backgroundSize: '100% 100%',
          fontSize: 60,
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <p style={{color:'white', margin:'-170'}}></p>
       <h4 style={{color:'white',}}>Seasonal Erosion - Relic in Summer</h4> 
      </div>
    ),
    intents: [
      <Button.Link href='https://wallet.coinbase.com/summer/play?referral_id=ceb39fd3-3382-45a3-9ae9-f8278882fbca&challenge_id=6mpsE4jgRI0GnuU3elo2XV'> Go to this NFT</Button.Link>,
      <Button> Back to home</Button>
    ],
  })
})
devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)

// NOTE: That if you are using the devtools and enable Edge Runtime, you will need to copy the devtools
// static assets to the public folder. You can do this by adding a script to your package.json:
// ```json
// {
//   scripts: {
//     "copy-static": "cp -r ./node_modules/frog/_lib/ui/.frog ./public/.frog"
//   }
// }
// ```
// Next, you'll want to set up the devtools to use the correct assets path:
// ```ts
// devtools(app, { assetsPath: '/.frog' })
// ```
