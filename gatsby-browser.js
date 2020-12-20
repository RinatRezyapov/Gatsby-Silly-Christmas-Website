import "./src/styles/global.scss"

export const onInitialClientRender = () => {
  setTimeout(function() {
      document.getElementById("bgAudio").volume = '0.1';
      document.getElementById("___loader").style.display = "none";
  }, 1000)
}