<?xml version="1.0" encoding="utf-8"?>
<!--
  Modern RSS Feed Stylesheet
  Styled for Saif Abdelrazek's website
  Based on AboutFeeds/PrettyFeed project
-->
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/> - RSS Feed</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
        <style type="text/css">
          /* Modern CSS Reset */
          *, *::before, *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          
          /* Root Variables */
          :root {
            --color-primary: #0ea5e9;
            --color-primary-dark: #0284c7;
            --color-secondary: #f0f9ff;
            --color-accent: #f59e0b;
            --color-text: #1f2937;
            --color-text-muted: #6b7280;
            --color-border: #e5e7eb;
            --color-bg: #ffffff;
            --color-bg-alt: #f9fafb;
            --color-success: #10b981;
            --color-warning: #f59e0b;
            --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
            --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
            --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
            --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
            --radius: 0.5rem;
            --radius-lg: 1rem;
          }
          
          /* Dark mode */
          @media (prefers-color-scheme: dark) {
            :root {
              --color-primary: #0ea5e9;
              --color-primary-dark: #38bdf8;
              --color-secondary: #0f172a;
              --color-text: #f1f5f9;
              --color-text-muted: #94a3b8;
              --color-border: #334155;
              --color-bg: #0f172a;
              --color-bg-alt: #1e293b;
            }
          }
          
          /* Base Styles */
          html {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
            line-height: 1.6;
            color: var(--color-text);
            background: var(--color-bg);
          }
          
          body {
            background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-bg) 100%);
            min-height: 100vh;
          }
          
          /* Container */
          .container {
            max-width: 48rem;
            margin: 0 auto;
            padding: 2rem 1rem;
          }
          
          /* Header Styles */
          .header {
            text-align: center;
            margin-bottom: 3rem;
            padding: 2rem;
            background: var(--color-bg);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-lg);
            border: 1px solid var(--color-border);
          }
          
          .rss-icon {
            width: 3rem;
            height: 3rem;
            margin: 0 auto 1rem;
            background: linear-gradient(135deg, #ff6b35 0%, #f7941d 100%);
            border-radius: var(--radius);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: var(--shadow-md);
          }
          
          .rss-icon svg {
            width: 1.5rem;
            height: 1.5rem;
            fill: white;
          }
          
          .feed-title {
            font-size: 2.25rem;
            font-weight: 700;
            color: var(--color-text);
            margin-bottom: 0.5rem;
            line-height: 1.2;
          }
          
          .feed-description {
            font-size: 1.125rem;
            color: var(--color-text-muted);
            margin-bottom: 1.5rem;
            max-width: 40rem;
            margin-left: auto;
            margin-right: auto;
          }
          
          .feed-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            background: var(--color-primary);
            color: white;
            text-decoration: none;
            border-radius: var(--radius);
            font-weight: 500;
            transition: all 0.2s ease;
            box-shadow: var(--shadow-md);
          }
          
          .feed-link:hover {
            background: var(--color-primary-dark);
            transform: translateY(-1px);
            box-shadow: var(--shadow-lg);
          }
          
          /* Info Banner */
          .info-banner {
            background: linear-gradient(135deg, var(--color-warning), #fbbf24);
            color: #92400e;
            padding: 1rem 1.5rem;
            border-radius: var(--radius);
            margin-bottom: 2rem;
            box-shadow: var(--shadow-md);
          }
          
          .info-banner strong {
            font-weight: 600;
          }
          
          .info-banner a {
            color: #92400e;
            font-weight: 500;
            text-decoration: underline;
          }
          
          .info-banner a:hover {
            text-decoration: none;
          }
          
          /* Section Titles */
          .section-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--color-text);
            margin-bottom: 1.5rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid var(--color-primary);
            display: inline-block;
          }
          
          /* Article Cards */
          .articles {
            display: grid;
            gap: 1.5rem;
          }
          
          .article {
            background: var(--color-bg);
            border-radius: var(--radius-lg);
            padding: 1.5rem;
            box-shadow: var(--shadow-md);
            border: 1px solid var(--color-border);
            transition: all 0.2s ease;
          }
          
          .article:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-xl);
          }
          
          .article-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.75rem;
            line-height: 1.3;
          }
          
          .article-title a {
            color: var(--color-text);
            text-decoration: none;
            border-bottom: 2px solid transparent;
            transition: border-color 0.2s ease;
          }
          
          .article-title a:hover {
            color: var(--color-primary);
            border-bottom-color: var(--color-primary);
          }
          
          .article-meta {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.875rem;
            color: var(--color-text-muted);
            margin-bottom: 0.75rem;
          }
          
          .article-meta svg {
            width: 1rem;
            height: 1rem;
            fill: currentColor;
          }
          
          .article-description {
            color: var(--color-text-muted);
            line-height: 1.5;
          }
          
          /* Footer */
          .footer {
            text-align: center;
            margin-top: 3rem;
            padding: 2rem;
            color: var(--color-text-muted);
            font-size: 0.875rem;
          }
          
          .footer a {
            color: var(--color-primary);
            text-decoration: none;
          }
          
          .footer a:hover {
            text-decoration: underline;
          }
          
          /* Responsive Design */
          @media (max-width: 640px) {
            .container {
              padding: 1rem 0.5rem;
            }
            
            .header {
              padding: 1.5rem;
              margin-bottom: 2rem;
            }
            
            .feed-title {
              font-size: 1.875rem;
            }
            
            .feed-description {
              font-size: 1rem;
            }
            
            .article {
              padding: 1rem;
            }
          }
          
          /* Animations */
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .article {
            animation: fadeIn 0.6s ease forwards;
          }
          
          .article:nth-child(1) { animation-delay: 0.1s; }
          .article:nth-child(2) { animation-delay: 0.2s; }
          .article:nth-child(3) { animation-delay: 0.3s; }
          .article:nth-child(4) { animation-delay: 0.4s; }
          .article:nth-child(5) { animation-delay: 0.5s; }
        </style>
      </head>
      <body>
        <div class="container">
          <!-- Info Banner -->
          <div class="info-banner">
            <strong>📡 This is an RSS feed</strong> - a way to subscribe to updates from this website. 
            <strong>Subscribe</strong> by copying this URL into your favorite RSS reader or news app. 
            New to RSS? <a href="https://aboutfeeds.com" target="_blank">Learn more about feeds →</a>
          </div>

          <!-- Header -->
          <header class="header">
            <div class="rss-icon">
              <svg viewBox="0 0 24 24">
                <path d="M3.429 14.286c1.262 0 2.286 1.023 2.286 2.286S4.69 18.857 3.429 18.857 1.143 17.834 1.143 16.571s1.023-2.285 2.286-2.285zM1.143 4v4.571c7.714 0 14.286 6.572 14.286 14.286H20C20 14.571 13.714 4 1.143 4zM1.143 10.857v4.572c4.571 0 8.571 4 8.571 8.571h4.572c0-7.429-5.715-13.143-13.143-13.143z"/>
              </svg>
            </div>
            <h1 class="feed-title">
              <xsl:value-of select="/rss/channel/title"/>
            </h1>
            <p class="feed-description">
              <xsl:value-of select="/rss/channel/description"/>
            </p>
            <a class="feed-link" target="_blank">
              <xsl:attribute name="href">
                <xsl:value-of select="/rss/channel/link"/>
              </xsl:attribute>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15,3 21,3 21,9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Visit Website
            </a>
          </header>

          <!-- Articles -->
          <main>
            <h2 class="section-title">Recent Articles</h2>
            <div class="articles">
              <xsl:for-each select="/rss/channel/item">
                <article class="article">
                  <h3 class="article-title">
                    <a target="_blank">
                      <xsl:attribute name="href">
                        <xsl:value-of select="link"/>
                      </xsl:attribute>
                      <xsl:value-of select="title"/>
                    </a>
                  </h3>
                  <div class="article-meta">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12,6 12,12 16,14"></polyline>
                    </svg>
                    <time>
                      <xsl:value-of select="pubDate"/>
                    </time>
                  </div>
                  <xsl:if test="description">
                    <p class="article-description">
                      <xsl:value-of select="description"/>
                    </p>
                  </xsl:if>
                </article>
              </xsl:for-each>
            </div>
          </main>

          <!-- Footer -->
          <footer class="footer">
            <p>
              Generated by <a href="https://saifabdelrazek.com" target="_blank">Saif Abdelrazek</a> • 
              Powered by <a href="https://astro.build" target="_blank">Astro</a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>