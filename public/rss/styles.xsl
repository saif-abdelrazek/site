<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/> Web Feed</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <style type="text/css">
          html, body {
            font-family: 'Segoe UI', 'Roboto', Arial, sans-serif;
            background: #f6f8fa;
            color: #22223b;
            margin: 0;
            padding: 0;
          }
          .container-md {
            max-width: 700px;
            margin: 0 auto;
            padding: 24px 12px;
          }
          header {
            background: #fff;
            border-radius: 18px;
            box-shadow: 0 2px 16px rgba(0,0,0,0.07);
            padding: 32px 24px 24px 24px;
            margin-bottom: 32px;
            text-align: center;
          }
          header h1 {
            font-size: 2.2em;
            color: #2a6f97;
            margin-bottom: 0.2em;
            font-weight: 800;
            letter-spacing: -1px;
          }
          header h2 {
            font-size: 1.3em;
            color: #495057;
            margin: 0.5em 0 0.2em 0;
            font-weight: 600;
          }
          header p {
            color: #495057;
            margin-bottom: 1em;
          }
          .head_link {
            display: inline-block;
            margin-top: 0.5em;
            color: #fff;
            background: linear-gradient(90deg, #2a6f97 60%, #38b6ff 100%);
            padding: 0.5em 1.2em;
            border-radius: 8px;
            font-weight: 600;
            text-decoration: none;
            transition: background 0.2s;
          }
          .head_link:hover {
            background: linear-gradient(90deg, #38b6ff 0%, #2a6f97 100%);
            color: #fff;
            text-decoration: underline;
          }
          h2 {
            font-size: 1.4em;
            margin-top: 2em;
            margin-bottom: 1em;
            color: #2a6f97;
            font-weight: 700;
          }
          .feed-item {
            background: #fff;
            border-radius: 14px;
            box-shadow: 0 1px 8px rgba(0,0,0,0.05);
            margin-bottom: 24px;
            padding: 22px 20px 18px 20px;
            transition: box-shadow 0.2s;
          }
          .feed-item:hover {
            box-shadow: 0 4px 24px rgba(56,182,255,0.13);
          }
          .feed-item h3 {
            margin: 0 0 0.2em 0;
            font-size: 1.15em;
            font-weight: 700;
            color: #186faf;
            line-height: 1.3;
          }
          .feed-item h3 a {
            color: #186faf;
            text-decoration: none;
            transition: color 0.2s;
          }
          .feed-item h3 a:hover {
            color: #38b6ff;
            text-decoration: underline;
          }
          .feed-item small {
            color: #6c757d;
            font-size: 0.98em;
            display: block;
            margin-bottom: 0.5em;
          }
          @media (max-width: 600px) {
            .container-md {
              padding: 10px 2vw;
            }
            header {
              padding: 18px 8px 14px 8px;
            }
            .feed-item {
              padding: 14px 8px 12px 8px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container-md">
          <header>
            <h1>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="vertical-align: text-bottom; width: 1.2em; height: 1.2em;" class="pr-1" id="RSSicon" viewBox="0 0 256 256">
                <defs>
                  <linearGradient x1="0.085" y1="0.085" x2="0.915" y2="0.915" id="RSSg">
                    <stop  offset="0.0" stop-color="#E3702D"/><stop  offset="0.1071" stop-color="#EA7D31"/>
                    <stop  offset="0.3503" stop-color="#F69537"/><stop  offset="0.5" stop-color="#FB9E3A"/>
                    <stop  offset="0.7016" stop-color="#EA7C31"/><stop  offset="0.8866" stop-color="#DE642B"/>
                    <stop  offset="1.0" stop-color="#D95B29"/>
                  </linearGradient>
                </defs>
                <rect width="256" height="256" rx="55" ry="55" x="0"  y="0"  fill="#CC5D15"/>
                <rect width="246" height="246" rx="50" ry="50" x="5"  y="5"  fill="#F49C52"/>
                <rect width="236" height="236" rx="47" ry="47" x="10" y="10" fill="url(#RSSg)"/>
                <circle cx="68" cy="189" r="24" fill="#FFF"/>
                <path d="M160 213h-34a82 82 0 0 0 -82 -82v-34a116 116 0 0 1 116 116z" fill="#FFF"/>
                <path d="M184 213A140 140 0 0 0 44 73 V 38a175 175 0 0 1 175 175z" fill="#FFF"/>
              </svg>
              Web Feed Preview
            </h1>
            <h2><xsl:value-of select="/rss/channel/title"/></h2>
            <p><xsl:value-of select="/rss/channel/description"/></p>
            <a class="head_link" target="_blank">
              <xsl:attribute name="href">
                <xsl:value-of select="/rss/channel/link"/>
              </xsl:attribute>
              Visit Website &#x2192;
            </a>
          </header>
          <h2>Recent Items</h2>
          <xsl:for-each select="/rss/channel/item">
            <div class="feed-item">
              <h3>
                <a target="_blank">
                  <xsl:attribute name="href">
                    <xsl:value-of select="link"/>
                  </xsl:attribute>
                  <xsl:value-of select="title"/>
                </a>
              </h3>
              <small>
                Published: <xsl:value-of select="pubDate" />
              </small>
            </div>
          </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>