const getUserInfo = async () => {
  try {
    // Fetch IP and location info
    const response = await fetch("https://wtfismyip.com/json");
    const data = await response.json();

    // If IPv6, try to get IPv4 as well
    let ipv4 = data.YourFuckingIPAddress;
    if (ipv4.includes(":")) {
      const ipv4Response = await fetch("https://ipv4.myip.wtf/text");
      ipv4 = (await ipv4Response.text()).trim();
    }

    setText("ipv4", ipv4);
    setText("location", data.YourFuckingLocation);
    setText("hostname", data.YourFuckingHostname);
    setText("isp", data.YourFuckingISP);
    setText("city", data.YourFuckingCity);
    setText("country", data.YourFuckingCountry);
    setText("countryCode", data.YourFuckingCountryCode);
    setText("userAgent", navigator.userAgent);

    setText("windowWidth", window.innerWidth.toString());
    setText("windowHeight", window.innerHeight.toString());
    setText("windowRatio", (window.innerWidth / window.innerHeight).toFixed(2));

    setText("screenWidth", window.screen.availWidth.toString());
    setText("screenHeight", window.screen.availHeight.toString());
    setText(
      "screenRatio",
      (window.screen.availWidth / window.screen.availHeight).toFixed(2),
    );

    setText("colorDepth", window.screen.colorDepth.toString());
    setText(
      "doNotTrack",
      navigator.doNotTrack === "1" ? "Enabled" : "Disabled",
    );
    setText("cookies", navigator.cookieEnabled ? "Enabled" : "Disabled");
    setText("webGLEnabled", !!window.WebGLRenderingContext ? "Yes" : "No");
    setText("browserLanguage", navigator.language);
    setText(
      "cpuThreads",
      navigator.hardwareConcurrency?.toString() ?? "Unknown",
    );
    setText(
      "globalPrivacyControl",
      (navigator as any).globalPrivacyControl ? "Enabled" : "Disabled",
    );
  } catch (error) {
    console.error("UserInfo error:", error);
  }
};

function setText(id: string, value: string) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

// Browser and OS detection
function detectBrowser(ua: string) {
  const browsers = [
    { name: "Yandex", pattern: /YaBrowser\/([\d.]+)/ },
    { name: "Samsung", pattern: /SamsungBrowser\/([\d.]+)/ },
    { name: "UC Browser", pattern: /UCBrowser\/([\d.]+)/ },
    { name: "Opera", pattern: /(OPR|Opera)\/([\d.]+)/ },
    { name: "Microsoft Edge", pattern: /Edg\/([\d.]+)/ },
    { name: "Microsoft Legacy Edge", pattern: /Edge\/([\d.]+)/ },
    { name: "Chrome", pattern: /Chrome\/([\d.]+)/ },
    { name: "Firefox", pattern: /Firefox\/([\d.]+)/ },
    { name: "Safari", pattern: /Version\/([\d.]+).*Safari/ },
  ];
  for (const { name, pattern } of browsers) {
    const match = ua.match(pattern);
    if (match) return { name, version: match[1] };
  }
  return { name: "Unknown", version: "Unknown" };
}

function detectOS(ua: string) {
  const osPatterns = [
    { name: "Windows 10", pattern: /(Windows 10.0|Windows NT 10.0)/ },
    { name: "Windows 8.1", pattern: /(Windows 8.1|Windows NT 6.3)/ },
    { name: "Android", pattern: /Android ([\d.]+)/ },
    { name: "iOS", pattern: /(iPhone|iPad|iPod).*OS ([\d_]+)/ },
    { name: "Mac OS", pattern: /Mac OS X ([\d_.]+)/ },
    { name: "Linux", pattern: /Linux/ },
    { name: "Chrome OS", pattern: /CrOS/ },
  ];
  for (const { name, pattern } of osPatterns) {
    if (pattern.test(ua)) {
      const versionMatch = ua.match(pattern);
      return {
        name: name.split(" ")[0],
        version: versionMatch?.[1]?.replace(/_/g, ".") || "Unknown",
      };
    }
  }
  return { name: "Unknown", version: "Unknown" };
}

// Call this from your Astro component with a client-side script
const fillBrowserAndOS = () => {
  const ua = navigator.userAgent;
  const browser = detectBrowser(ua);
  const os = detectOS(ua);
  const browserEl = document.querySelector(".browser");
  const osEl = document.querySelector(".os");
  if (browserEl)
    browserEl.textContent = `Browser: ${browser.name} ${browser.version}`;
  if (osEl) osEl.textContent = `OS: ${os.name} ${os.version}`;
};

// Optionally, you can call both in one function
const fillUserInfo = async () => {
  await getUserInfo();
  fillBrowserAndOS();
};

fillUserInfo();
