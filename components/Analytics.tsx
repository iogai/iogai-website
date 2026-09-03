import Script from "next/script";

// Meta Pixel + GA4/Google Ads. Both stay dormant until their IDs are set as
// env vars (NEXT_PUBLIC_FB_PIXEL_ID / NEXT_PUBLIC_GA_ID) — so nothing loads,
// and no consent is needed, until you actually run ads. Then conversions
// (PageView + Lead) fire automatically. See lib/track.ts.
export function Analytics() {
  const fb = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
  const ga = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      {ga && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga}');`}
          </Script>
        </>
      )}
      {fb && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${fb}');fbq('track','PageView');`}
        </Script>
      )}
    </>
  );
}
