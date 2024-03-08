export const styles = {
    main: "flex min-h-screen flex-col items-center justify-between ${colors.background.gray} p-24",
    cardWrapper: "wrapper flex items-center justify-between flex-col perspective-1000 relative min-h-screen p-6 z-2 border-solid",
    wrapperBefore: "block",
    navbar: "fixed top-0 left-0 flex items-start p-4 ${colors.background.gray} h-screen",
    prologue: "flex min-h-screen flex-col items-center ${colors.background.gray} justify-start p-24",
    starWarsIntro: "flex justify-center items-center h-screen ${colors.background.gray} ${colors.text.black} overflow-hidden",
    starWarsIntroTitle: "text-3xl text-center mb-16"
}

const colors = {
  background: {
    gray: 'bg-gray-200'
  },
  text: {
    black: 'text-black-400'
  }
}
