import "./src/styles/global.scss"

export const onInitialClientRender = () => {
    const audio = document.getElementById("bgAudio");
    audio.volume = 0.1;
}