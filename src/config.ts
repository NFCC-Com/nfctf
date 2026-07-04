export const APP = {
  shortName: "NFCTF",
  fullName: "Nurul Fikri Capture The Flag",
  description: "Nurul Fikri Capture The Flag",
  flagFormat: "NFCTF{your_flag_here}",

  image_icon: "favicon.ico",
  image_logo: "logo.ico",
  image_preview: "og-image.png",

  /* Setting Config */
  notifSolves: true, // notifikasi global saat ada yang solve challenge

  teams: {
    enabled: false,
    hideScoreboardIndividual: false,
    hidescoreboardTotal: false,
  },

  difficultyStyles: {
    Baby: 'cyan',
    Easy: 'green',
    Medium: 'yellow',
    Hard: 'red',
    Insane: 'purple',
  },
}

export default APP
