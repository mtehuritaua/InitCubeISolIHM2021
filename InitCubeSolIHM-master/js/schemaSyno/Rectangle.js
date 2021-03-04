function Rectangle(x, y, rad, string1, string2 = "", string3 = "", string4 = "", string5 = "") {
  this.x = x;
  this.y = y;
  this.rad = rad;
  this.width = 250;
  this.height = 100;
  this.yCenter = this.y + this.height/2;
  this.xCenter = this.x + this.width/2;
  this.yDown = this.y + this.height;
  this.xRight = this.x + this.width;

  this.show = function() {
    rect(this.x, this.y, this.width, this.height, rad);
    stroke(255);

    text(string1, this.x + 4, this.y + 5, this.x + this.height);
    textSize(20);

    if (string2 != "") {
      text(string2, this.x + 4, this.y + 25, this.x + this.height);
      textSize(20);
    }

    if (string3 != "") {
      text(string3, this.x + 4, this.y + 45, this.x + this.height);
      textSize(20);
    }

    if (string4 != "") {
      text(string4, this.x + 4, this.y + 65, this.x + this.height);
      textSize(20);
    }

    if (string5 != "") {
      text(string5, this.x + 4, this.y + 85, this.x + this.height);
      textSize(20);
    }
  }
}