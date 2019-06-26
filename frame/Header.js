import Link from 'next/link';
import Head from 'next/head';

const Header = props => (
  <div>
    <Head>
      <title>Web projects</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" type="text/css" href="./static/styles.css" />
      <link rel="shortcut icon" href="./static/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Work+Sans:200,300,400" rel="stylesheet" />
      <script defer src="./static/helper.js"></script>
    </Head>

    <header>
      <div className="headbar">
        <div className="logo">
          <Link href="/">
            <a>
              <img title="Home" id="tesseract_img" className="tesseract_img_normal" 
                   alt="Tesseract" src="./static/tesseract.png" />
            </a>
          </Link>
        </div>
        <div className="title">
          <h1 id="webProj" className="title_normal">Web Projects</h1>
          <h2 id="author">David Kerekes</h2>
        </div>
      </div>
      <div id="headBorder">
      </div>
    </header>

    <div className="empty_space">
    </div>
  </div>
);

export default Header;
