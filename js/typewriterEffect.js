const typewriter = {
  words: ["Frontend Developer", "Javascript Lover", "Software Engineer"],
  wordIndex: 0,
  letterIndex: 0,
  textElement: document.getElementById("typewriter_effect_text"),
  cursorElement: document.querySelector(".typed-cursor"),

  typeWords: function () {
    this.cursorElement.classList.remove("typed-cursor--blink");
    const currentWord = this.words[this.wordIndex];
    if (this.letterIndex < currentWord.length) {
      this.textElement.textContent += currentWord[this.letterIndex];
      this.letterIndex++;
      setTimeout(() => {
        this.typeWords();
      }, 150);
    } else {
      this.cursorElement.classList.add("typed-cursor--blink");
      setTimeout(() => this.eraseWords(), 1000);
    }
  },

  eraseWords: function () {
    const currentWord = this.words[this.wordIndex];
    this.cursorElement.classList.remove("typed-cursor--blink");
    if (this.letterIndex > 0) {
      this.textElement.textContent = currentWord.substring(
        0,
        this.letterIndex - 1
      );
      this.letterIndex--;
      setTimeout(() => {
        this.eraseWords();
      }, 50);
    } else {
      this.cursorElement.classList.add("typed-cursor--blink");
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      setTimeout(() => this.typeWords(), 1000);
    }
  },
};

typewriter.typeWords();
