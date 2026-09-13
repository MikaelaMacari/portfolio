import localFont from "next/font/local";

export const spaceGrotesk = localFont({
  variable: "--font-space-grotesk",
  display: "swap",
  src: [
    {
      path: "./fonts/space-grotesk/SpaceGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/space-grotesk/SpaceGrotesk-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
});

export const ibmPlexSans = localFont({
  variable: "--font-ibm-plex-sans",
  display: "swap",
  src: [
    {
      path: "./fonts/ibm-plex-sans/IBMPlexSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const ibmPlexMono = localFont({
  variable: "--font-ibm-plex-mono",
  display: "swap",
  src: [
    {
      path: "./fonts/ibm-plex-mono/IBMPlexMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ibm-plex-mono/IBMPlexMono-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
});
