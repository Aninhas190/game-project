class Background {
  constructor(game) {
    this.game = game;
  }


  drawGameOver() {
    const context = this.game.context;
    const height = this.game.height;
    const width = this.game.width;
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';
    context.font = "80px sans-serif";
    context.fillText('Game Over!', 200, 250);
    context.font = '40px sans-serif'
    context.fillText('Press Backspace to Reset Game!', 100, 300);
  }

  drawWin() {
    const context = this.game.context;
    const height = 600;
    const width = 1000;
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    
    context.fillStyle = 'black';
    context.font = "80px sans-serif";
    context.fillText('Level 1', 300, 200);
    context.fillText('Completed', 250, 260)
  }

  drawBackground() {
    const context = this.game.context;
    const height = 600;
    const width = 1000;
    context.fillStyle = '#66cdaa';
    context.fillRect(0, 0, width, height);

    context.fillStyle = '#C26C36';
    context.font = '30px sans-serif';
    context.fillText('Level 1', 5 , 30);
  }
}
