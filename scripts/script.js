new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        { /* 1 */
          name: "Aveces",
          artist: "Al2 El Aldeano",
          cover: "https://github.com/Mjtc2323/musica1/blob/main/imagenes/aveces%20al2.jpg?raw=true",
          source: "https://github.com/Mjtc2323/musica1/raw/main/Al2%20El%20Aldeano%20-%20A%20Veces%20(LETRA).mp3",
          url: "https://www.youtube.com/watch?v=LQYOZFO5aB4&pp=ygUKYXZlY2VzIGFsMg%3D%3D",
          favorited: true
        },
        { /* 2 */
          name: "Como Tiene Que Ser",
          artist: "Arcangel",
          cover: "https://github.com/Mjtc2323/musica1/blob/main/imagenes/como%20tiene%20que%20ser%20arcangel.jpg?raw=true",
          source: "https://github.com/Mjtc2323/musica1/raw/main/Arcangel%20-%20Como%20Tiene%20Que%20Ser.mp3",
          url: "https://www.youtube.com/watch?v=fXkF48-Fehs",
          favorited: true
        },
        { /* 3 */
          name: "Nuestros Horarios",
          artist: "Ferraz FT Sabino",
          cover: "https://github.com/Mjtc2323/musica1/blob/main/imagenes/nuestros%20horarios%20sabino.jpg?raw=true",
          source: "https://github.com/Mjtc2323/musica1/raw/main/Ferraz%20-%20Nuestros%20Horarios%20feat.%20Sabino%20(Audio%20Oficial).mp3",
          url: "https://www.youtube.com/watch?v=jg3Ct4LZr44",
          favorited: false
        },
        { /* 4 */
          name: "Follow You",
          artist: "Imagine Dragons",
          cover: "https://github.com/Mjtc2323/musica1/blob/main/imagenes/follow%20you%20imagine%20dragons.jpg?raw=true",
          source: "https://github.com/Mjtc2323/musica1/raw/main/Imagine%20Dragons%20-%20Follow%20You%20(Lyric%20Video).mp3",
          url: "https://www.youtube.com/watch?v=k3zimSRKqNw",
          favorited: false
        },
        { /* 5 */
          name: "You're The Inspiration",
          artist: "Chicago",
          cover: "https://github.com/Mjtc2323/musica1/blob/main/imagenes/youre%20the%20inspiration%20chicago.jpg?raw=true",
          source: "https://github.com/Mjtc2323/musica1/raw/main/Chicago%20-%20You're%20The%20Inspiration%20_%20Lyrics-Letra%20_%20Subtitulado%20al%20Espa%C3%B1ol.mp3",
          url: "https://www.youtube.com/watch?v=Z5HFZ7-dRjs",
          favorited: true
        },
        { /* 6 */
          name: "La Que Me Gusta",
          artist: "Los Amigos Invisibles",
          cover: "https://github.com/Mjtc2323/musica1/blob/main/imagenes/la%20que%20me%20gusta%20amigops%20invisibles.jpg?raw=true",
          source: "https://github.com/Mjtc2323/musica1/raw/main/La%20Que%20Me%20Gusta%20-%20Los%20Amigos%20Invisibles%20(Official%20Music%20Video).mp3",
          url: "https://www.youtube.com/watch?v=OCM2pNdgzsc",
          favorited: false
        },
        { /* 7 */
          name: "Kiss Me",
          artist: "Magic!",
          cover: "https://github.com/Mjtc2323/musica1/blob/main/imagenes/kiss%20me%20magic.jpg?raw=true",
          source: "https://github.com/Mjtc2323/musica1/raw/main/MAGIC!%20-%20Kiss%20Me%20(Official%20Video).mp3",
          url: "https://www.youtube.com/watch?v=QGmIkreNmQ4",
          favorited: true
        },
        { /* 8 */
          name: "Me Gusta",
          artist: "El Chojin",
          cover: "https://github.com/Mjtc2323/musica1/blob/main/imagenes/me%20gusta%20el%20chojin.jpg?raw=true",
          source: "https://github.com/Mjtc2323/musica1/raw/main/Me%20Gusta.mp3",
          url: "https://www.youtube.com/watch?v=mA-Kgmp-BYI",
          favorited: false
        },
        { /* 9 */
          name: "Mi Mundo Preferido",
          artist: "Piter-G",
          cover: "https://github.com/Mjtc2323/musica1/blob/main/imagenes/mi%20mundo%20preferido%20piter%20g.jpg?raw=true",
          source: "https://github.com/Mjtc2323/musica1/raw/main/Piter-G%20-%20Mi%20Mundo%20Preferido%20(Prod.%20por%20Piter-G).mp3",
          url: "https://www.youtube.com/watch?v=sPW1NAwOapg",
          favorited: false
        },
        { /* 10 */
          name: "Confia",
          artist: "Rafa Espino FT Piter-G",
          cover: "https://github.com/Mjtc2323/musica1/blob/main/imagenes/confia%20piter%20g.jpg?raw=true",
          source: "https://github.com/Mjtc2323/musica1/raw/main/Rafa%20Espino%20ft%20Piter-G%20-%20Conf%C3%ADa%20(V%C3%ADdeo%20Oficial).mp3",
          url: "https://www.youtube.com/watch?v=uQV7ORrjSeY",
          favorited: false
        },
        { /* 11 */
          name: "Relacion",
          artist: "Apache",
          cover: "https://github.com/Mjtc2323/musica1/blob/main/imagenes/relacion%20apache.jpg?raw=true",
          source: "https://github.com/Mjtc2323/musica1/raw/main/Relaci%C3%B3n.mp3",
          url: "https://www.youtube.com/watch?v=yqbgZE8Swnw",
          favorited: false
        },
        { /* 12 */
          name: "Dejalo Que Fluya",
          artist: "Residente FT Arcangel",
          cover: "https://github.com/Mjtc2323/musica1/blob/main/imagenes/dejalo%20que%20fluya%20residente.jpg?raw=true",
          source: "https://github.com/Mjtc2323/musica1/raw/main/Residente,%20Arc%C3%A1ngel%20-%20Que%20Fluya%20(Visualizer).mp3",
          url: "https://www.youtube.com/watch?v=8IqpaipoN7c",
          favorited: false
        },
        { /* 13 */
          name: "Conmigo Siempre",
          artist: "Sabino",
          cover: "https://github.com/Mjtc2323/musica1/blob/main/imagenes/conmigo%20siempre%20sabino.jpg?raw=true",
          source: "https://github.com/Mjtc2323/musica1/raw/main/Sabino%20-%20Conmigo%20Siempre.mp3",
          url: "https://www.youtube.com/watch?v=HuY9cqIMEA0",
          favorited: false
        },
        { /* 14 */
          name: "Tu",
          artist: "Sabino",
          cover: "https://github.com/Mjtc2323/musica1/blob/main/imagenes/tu%20sabino.jpg?raw=true",
          source: "https://github.com/Mjtc2323/musica1/raw/main/Sabino%20-%20T%C3%BA.mp3",
          url: "https://www.youtube.com/watch?v=LTejAUxtWbI",
          favorited: false
        },
        { /* 15 */
          name: "Nuevequince",
          artist: "Sabino",
          cover: "https://github.com/Mjtc2323/musica1/blob/main/imagenes/nuevequince%20sabino.jpg?raw=true",
          source: "https://github.com/Mjtc2323/musica1/raw/main/Sabino%20ft.%20Fer%20Casillas,%20Moha,%20Garam%20Mazala,%20Pizarro,%20Kike%20-%20Nuevequince%20(Official%20Music%20Video).mp3",
          url: "https://www.youtube.com/watch?v=GffnM-8nLIs",
          favorited: false
        },
        
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
