import React, { Component } from 'react'

export class NewsItem extends Component {
  articles = [
    {
      source: { id: 'bbc-news', name: 'BBC News' },
      author: null,
      title: 'Australian Cricket: Coach Justin Langer resigns as coach',
      description:
        "Justin Langer resigns as coach of the Australia men's cricket team, ending months of speculation as to whether he would continue in the role.",
      url: 'https://www.bbc.co.uk/sport/cricket/60269322',
      urlToImage:
        'https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/AF22/production/_123143844_langer1.jpg',
      publishedAt: '2022-02-05T01:11:57Z',
      content:
        "Justin Langer had been seeking a contract extension\r\nJustin Langer has resigned as coach of the Australia men's cricket team.\r\nThe 51-year-old's contract was going to expire at the end of June and he… [+880 chars]",
    },
    {
      source: { id: 'bbc-news', name: 'BBC News' },
      author: null,
      title:
        'India to face England in U19 World Cup final after win over Australia',
      description:
        "India's under-19 cricket team defeat Australia by 96 runs in their World Cup semi-final match in Antigua.",
      url: 'https://www.bbc.co.uk/sport/cricket/60233492',
      urlToImage:
        'https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/AD34/production/_123104344_gettyimages-1368230609.jpg',
      publishedAt: '2022-02-02T22:35:45Z',
      content:
        'India captain Yash Dhull led his side to victory with a man of the match performance\r\n<table>\r\n<tr><td>Under-19 World Cup semi-final, Coolidge Cricket Ground, Antigua</td></tr><tr><td>India U19 290-5… [+1458 chars]',
    },
    {
      source: { id: 'bbc-news', name: 'BBC News' },
      author: null,
      title:
        "Zimbabwe's Brendan Taylor banned from cricket for more than three years",
      description:
        'Former Zimbabwe skipper Brendan Taylor is banned from cricket for more than three years after admitting charges related to drug use and a match-fixing approach.',
      url: 'https://www.bbc.co.uk/sport/cricket/60170236',
      urlToImage:
        'https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/170CE/production/_123041449_taylor_getty.jpg',
      publishedAt: '2022-01-28T15:02:49Z',
      content:
        'Taylor failed a drugs test during his final one-day international series - against Ireland in September\r\nFormer Zimbabwe skipper Brendan Taylor has been banned from cricket for three and a half years… [+1504 chars]',
    },
    {
      source: { id: 'bbc-news', name: 'BBC News' },
      author: null,
      title:
        "'A couple of deliveries separating all four results - this is how the game should be'",
      description:
        "Geoff Lemon reflects on a vintage day of cricket as daring England attempted to pull off the boldest run chase in women's Test history.",
      url: 'https://www.bbc.co.uk/sport/cricket/60190388',
      urlToImage:
        'https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/16913/production/_123053429_gettyimages-1367620878.jpg',
      publishedAt: '2022-01-30T18:07:30Z',
      content:
        "Kate Cross blocked out the final ball of the Women's Ashes Test to ensure it finished as a draw\r\nThis is how the game should be.\r\nNine women crowded around the bat, plus the wicketkeeper close behind… [+5120 chars]",
    },
    {
      source: { id: 'bbc-news', name: 'BBC News' },
      author: null,
      title: 'Chris Silverwood leaves as England head coach after Ashes defeat',
      description:
        "Head coach Chris Silverwood follows director of cricket Ashley Giles in leaving the England men's team following the heavy Ashes defeat.",
      url: 'https://www.bbc.co.uk/sport/cricket/59754595',
      urlToImage:
        'https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/13590/production/_97584297_breaking_news.png',
      publishedAt: '2022-02-03T19:15:42Z',
      content:
        "Head coach Chris Silverwood has followed director of cricket Ashley Giles in leaving the England men's team following the heavy Ashes defeat.\r\nThe 4-0 loss in Australia came part of a wider run that … [+3401 chars]",
    },
    {
      source: { id: 'bbc-news', name: 'BBC News' },
      author: null,
      title:
        "Middlesex chairman's views on black and South Asian interest in cricket 'painful' - Rainford-Brent",
      description:
        'Former England player Ebony Rainford-Brent says Middlesex chairman Mike O\'Farrell\'s comments on black and South Asian interest in cricket are "painful" and "outdated".',
      url: 'https://www.bbc.co.uk/sport/cricket/60125897',
      urlToImage:
        'https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/16BE7/production/_122995139_gettyimages-1271126255.jpg',
      publishedAt: '2022-01-25T14:56:55Z',
      content:
        "Middlesex chairman addresses parliamentary hearing on cricket's governance\r\nFormer England player Ebony Rainford-Brent says Middlesex chairman Mike O'Farrell's comments on black and South Asian inter… [+3160 chars]",
    },
    {
      source: { id: 'reuters', name: 'Reuters' },
      author: null,
      title:
        'India unlikely to field cricket teams in Hangzhou Asiad - Reuters',
      description:
        "Cricket will make a comeback at the Asian Games in Hangzhou later this year but India, the game's financial engine, is unlikely to field teams owing to existing commitments.",
      url: 'https://www.reuters.com/lifestyle/sports/india-unlikely-field-cricket-teams-hangzhou-asiad-2022-02-18/',
      urlToImage:
        'https://www.reuters.com/resizer/LWHFB6n8KixeLssWo3PraaxrBLA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RYYA6ECBE5ICXLYYO2AXJP3XKI.jpg',
      publishedAt: '2022-02-18T09:57:00Z',
      content:
        "NEW DELHI, Feb 18 (Reuters) - Cricket will make a comeback at the Asian Games in Hangzhou later this year but India, the game's financial engine, is unlikely to field teams owing to existing commitme… [+1922 chars]",
    },
    {
      source: { id: 'reuters', name: 'Reuters' },
      author: null,
      title:
        "Amazon, Reliance set to lock horns over India's cricket media rights - Reuters",
      description:
        "Amazon's rivalry in India with oil-to-retail conglomerate Reliance Industries looks set to head to the cricket field, where they will likely battle media heavyweights for telecast rights to India's premier cricket league with its hundreds of millions of viewe…",
      url: 'https://www.reuters.com/business/media-telecom/amazon-reliance-set-lock-horns-over-indias-cricket-media-rights-2022-02-20/',
      urlToImage:
        'https://www.reuters.com/resizer/kf1tZwt3pUFYHV3wwvw89JnT-xQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/7GJ4DVCHZVOS5P76EQJZABGLO4.jpg',
      publishedAt: '2022-02-20T10:44:00Z',
      content:
        "MUMBAI, Feb 20 (Reuters) - Amazon's rivalry in India with oil-to-retail conglomerate Reliance Industries looks set to head to the cricket field, where they will likely battle media heavyweights for t… [+4092 chars]",
    },
    {
      source: { id: 'reuters', name: 'Reuters' },
      author: null,
      title:
        "Balancing baby and batting, Maroof leads Pakistan's World Cup bid - Reuters",
      description:
        'Thirteen months ago, Pakistan captain Bismah Maroof was preparing to bid farewell to cricket and embrace motherhood.',
      url: 'https://www.reuters.com/lifestyle/sports/balancing-baby-batting-maroof-leads-pakistans-world-cup-bid-2022-02-01/',
      urlToImage:
        'https://www.reuters.com/resizer/syA0pyIMpC6VTgU54hhHR8yu-XU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/IOMPIR5DORIYJPEGGMHAY4FJYQ.jpg',
      publishedAt: '2022-02-01T05:29:00Z',
      content:
        "NEW DELHI, Feb 1 (Reuters) - Thirteen months ago, Pakistan captain Bismah Maroof was preparing to bid farewell to cricket and embrace motherhood.\r\nCome March, she will be spearheading Pakistan's camp… [+2744 chars]",
    },
    {
      source: { id: null, name: 'The Guardian' },
      author: 'Simon Burnton in Bridgetown',
      title:
        'Chris Jordan: ‘Cricket during Covid isn’t as enjoyable, it’s unnatural’',
      description:
        'Bubble life has been a challenge for seamer who finds his role as England’s Twenty20 death bowler in doubt in the West IndiesThe Twenty20 series against West Indies is a special one for Chris Jordan. The England seamer is back in Barbados where he was born an…',
      url: 'https://amp.theguardian.com/sport/2022/jan/28/chris-jordan-cricket-during-covid-isnt-as-enjoyable-its-unnatural',
      urlToImage:
        'https://i.guim.co.uk/img/media/fe7c3f8c4462e736ec8713d685e2adab2a81d803/0_40_4869_2924/master/4869.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=015b63d4d46e7f01ca87b86a30a59ec8',
      publishedAt: '2022-01-28T14:31:15Z',
      content:
        'The Twenty20 series against West Indies is a special one for Chris Jordan. The England seamer is back in Barbados where he was born and raised and surrounded by family and old friends. The first thin… [+4745 chars]',
    },
    {
      source: { id: null, name: 'The Guardian' },
      author: 'Australian Associated Press',
      title:
        'Cricket Australia denies meeting with coach Justin Langer got heated',
      description:
        '<ul><li>Discussions have begun with Langer off-contract in June</li><li>CA ‘correct the record’ after meeting with coach last week</li></ul>Cricket Australia has flatly rejected a meeting with Justin Langer turned sour when talks opened over the coach’s futur…',
      url: 'https://amp.theguardian.com/sport/2022/feb/01/cricket-australia-deny-meeting-with-coach-justin-langer-got-heated',
      urlToImage:
        'https://i.guim.co.uk/img/media/0b3154799395c4f1afea4c28547789d1e9747ff9/0_34_4217_2529/master/4217.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f6ff611489087ca68f0c5b93ad3b19d0',
      publishedAt: '2022-02-01T02:50:52Z',
      content:
        'Cricket Australia has flatly rejected a meeting with Justin Langer turned sour when talks opened over the coachs future in the role. In an extraordinary move, CA broke its long-held position of refus… [+2664 chars]',
    },
    {
      source: { id: 'reuters', name: 'Reuters' },
      author: null,
      title:
        'Australia add all-rounder Sams to squad for Sri Lanka series - Reuters',
      description:
        "All-rounder Daniel Sams has been added to Australia's squad for their five-match Twenty20 International series against Sri Lanka, Cricket Australia (CA) said on Monday.",
      url: 'https://www.reuters.com/lifestyle/sports/australia-add-all-rounder-sams-squad-sri-lanka-series-2022-02-07/',
      urlToImage:
        'https://www.reuters.com/resizer/kJFZouVrVhHhwKZh6gv3zc-SJbE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BMSE36YWJRNY5OP5RLZUYMUC5Y.jpg',
      publishedAt: '2022-02-07T05:05:00Z',
      content:
        "Feb 7 (Reuters) - All-rounder Daniel Sams has been added to Australia's squad for their five-match Twenty20 International series against Sri Lanka, Cricket Australia (CA) said on Monday.\r\nThe 29-year… [+963 chars]",
    },
    {
      source: { id: 'reuters', name: 'Reuters' },
      author: null,
      title:
        "'Painted as a monster' - Gilchrist slams Cricket Australia after Langer quits - Reuters",
      description:
        'Former Australia captain Adam Gilchrist criticised Cricket Australia (CA) on Monday for their treatment of Justin Langer, saying the former head coach had been painted as a "monster".',
      url: 'https://www.reuters.com/lifestyle/sports/painted-monster-gilchrist-slams-cricket-australia-after-langer-quits-2022-02-07/',
      urlToImage:
        'https://www.reuters.com/resizer/2ubE98lYr9pES_LxMKuE8MEE-RY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KZBV6LFFUJJZTIH6RKK7UONOQI.jpg',
      publishedAt: '2022-02-07T04:56:00Z',
      content:
        'Feb 7 (Reuters) - Former Australia captain Adam Gilchrist criticised Cricket Australia (CA) on Monday for their treatment of Justin Langer, saying the former head coach had been painted as a "monster… [+1838 chars]',
    },
    {
      source: { id: 'reuters', name: 'Reuters' },
      author: null,
      title:
        'England must stop players from playing in IPL to improve test side, says Arthur - Reuters',
      description:
        'England must stop their players from participating in the Twenty20 Indian Premier League (IPL) to improve their test side, former South Africa coach Mickey Arthur said on Wednesday.',
      url: 'https://www.reuters.com/lifestyle/sports/england-must-stop-players-playing-ipl-improve-test-side-says-arthur-2022-02-16/',
      urlToImage:
        'https://www.reuters.com/resizer/KWo53evZq7w7VhB8lTYUlkhDp-4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ILZVTH7FW5MKTMFGG7ADXB3UQ4.jpg',
      publishedAt: '2022-02-16T04:30:00Z',
      content:
        'Feb 16 (Reuters) - England must stop their players from participating in the Twenty20 Indian Premier League (IPL) to improve their test side, former South Africa coach Mickey Arthur said on Wednesday… [+1651 chars]',
    },
    {
      source: { id: null, name: 'The Guardian' },
      author: 'Tanya Aldred',
      title:
        'The Spin | From gloves to bats, cricket gear buyers are stumped by a lack of clarity',
      description:
        'No one buying equipment for the new season has much idea if it is being made ethically or sustainably and that should changeIt might not be your breakfast-table topic of choice, but we need to talk about cricket equipment. During the lockdown summer of 2020, …',
      url: 'https://amp.theguardian.com/sport/blog/2022/jan/26/the-spin-from-gloves-to-bats-cricket-gear-buyers-are-stumped-by-a-lack-of-clarity',
      urlToImage:
        'https://i.guim.co.uk/img/media/25d6f4f72829383ca3a64352494ae00f3257c6c4/0_237_4000_2400/master/4000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=400ebdea2b66d396e67d1da7efdf3a1f',
      publishedAt: '2022-01-26T10:30:53Z',
      content:
        'It might not be your breakfast-table topic of choice, but we need to talk about cricket equipment. During the lockdown summer of 2020, Prof Martin Charter, from the Centre for Sustainable Design (CfS… [+5841 chars]',
    },
    {
      source: { id: null, name: 'The Guardian' },
      author: 'Guardian sport and agencies',
      title:
        'Justin Langer resigns as Australia cricket coach following CA board meeting',
      description:
        '<ul><li>Coach tenders resignation effective immediately</li><li>Langer’s contract was due to expire in June</li></ul>Justin Langer has ended six months of speculation over his role with the Australian men’s cricket team by resigning as head coach, effectively…',
      url: 'https://amp.theguardian.com/sport/2022/feb/05/justin-langer-resigns-as-australia-cricket-coach-following-ca-board-meeting',
      urlToImage:
        'https://i.guim.co.uk/img/media/9821ae152fc00fa0b7539ba085033b5a1525d722/0_101_3000_1800/master/3000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=762ab97af998d0312f8a3697d3e7d861',
      publishedAt: '2022-02-05T00:38:36Z',
      content:
        'Justin Langer has ended six months of speculation over his role with the Australian mens cricket team by resigning as head coach, effectively immediately.\r\nUncertainty which has swirled around his fu… [+2066 chars]',
    },
    {
      source: { id: null, name: 'The Guardian' },
      author: 'Editorial',
      title:
        'The Guardian view on cricket’s dilemma: the long and short of it | Editorial',
      description:
        'Counties and franchises can’t coexist for ever. The game will have to make its mind upIt may be a little early to be thinking about spring, but the publication of the first-class cricket fixtures hints that it is not too far away. They have been more eagerly …',
      url: 'https://amp.theguardian.com/commentisfree/2022/jan/21/the-guardian-view-on-crickets-dilemma-the-long-and-short-of-it',
      urlToImage:
        'https://i.guim.co.uk/img/media/6c988c300fb7c572ac7de984ebfd7ac9c325211a/0_56_3000_1800/master/3000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=fa133a0e852c5cb3b11b3efcb0e3a2bf',
      publishedAt: '2022-01-21T17:29:30Z',
      content:
        'It may be a little early to be thinking about spring, but the publication of the first-class cricket fixtures hints that it is not too far away. They have been more eagerly awaited than usual this ye… [+2947 chars]',
    },
    {
      source: { id: 'reuters', name: 'Reuters' },
      author: null,
      title: 'ECB to review dressing room culture during 2022 season - Reuters',
      description:
        'The England and Wales Cricket Board (ECB) on Tuesday updated its 12-point action plan to tackle racism and discrimination, including details on a review of "dressing room culture" and a standardised approach to whistleblowing.',
      url: 'https://www.reuters.com/lifestyle/sports/ecb-review-dressing-room-culture-during-2022-season-2022-01-25/',
      urlToImage:
        'https://www.reuters.com/resizer/k6ZESL483kBgBaYjWfAVXIVJAQ8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JTHX2NH5URIKBK7KWBH2DDE5MI.jpg',
      publishedAt: '2022-01-25T13:42:00Z',
      content:
        'Jan 25 (Reuters) - The England and Wales Cricket Board (ECB) on Tuesday updated its 12-point action plan to tackle racism and discrimination, including details on a review of "dressing room culture" … [+1500 chars]',
    },
    {
      source: { id: 'reuters', name: 'Reuters' },
      author: null,
      title:
        'Kishan, Shahrukh added to India squad for West Indies ODI - Reuters',
      description:
        'Batsmen Ishan Kishan and Shahrukh Khan have been added to the Indian squad for the first one-day international against the West Indies, the Indian cricket board (BCCI) said on Saturday.',
      url: 'https://www.reuters.com/lifestyle/sports/kishan-shahrukh-added-india-squad-west-indies-odi-2022-02-05/',
      urlToImage:
        'https://www.reuters.com/resizer/cWIzzB6sienILBdU6_A_s8zkf00=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WCLTBRKQGVP7DD2OPBZ5A6YANE.jpg',
      publishedAt: '2022-02-05T14:57:00Z',
      content:
        'Feb 5 (Reuters) - Batsmen Ishan Kishan and Shahrukh Khan have been added to the Indian squad for the first one-day international against the West Indies, the Indian cricket board (BCCI) said on Satur… [+696 chars]',
    },
    {
      source: { id: 'reuters', name: 'Reuters' },
      author: null,
      title:
        'Kiwi skipper Williamson ruled out of South Africa series - Reuters',
      description:
        "New Zealand captain Kane Williamson will miss the two-match test series against South Africa later this month after failing to recover in time from a long-standing elbow injury, the country's cricket board (NZC) said on Monday.",
      url: 'https://www.reuters.com/lifestyle/sports/kiwi-skipper-williamson-ruled-out-south-africa-series-2022-02-07/',
      urlToImage:
        'https://www.reuters.com/resizer/eTWtBxTokLynP2JRUSKwYHpKf8Q=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/J2ABSKSYCNLDJPQJTKGW2XWM74.jpg',
      publishedAt: '2022-02-07T16:57:00Z',
      content:
        'Feb 7 (Reuters) - New Zealand captain Kane Williamson will miss the two-match test series against South Africa later this month after failing to recover in time from a long-standing elbow injury, the… [+1610 chars]',
    },
  ]
  constructor() {
    super()
    console.log('Hello I am a constructor from News component')
    this.state = {
      articles: this.articles,
      loading: false,
    }
  }
  render() {
    let { title, description, imageUrl, newsUrl } = this.props
    return (
      <div className='my-3'>
        <div className='card' style={{ width: '18rem' }}>
          <img src={imageUrl} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>
            <a href='/newsdetail' className='btn btn-primary'>
              Read More
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
