"use client";

import { useEffect, useRef } from "react";

const Monster = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const c = canvas.getContext("2d");
    if (!c) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    c.fillStyle = "rgba(30,30,30,1)";
    c.fillRect(0, 0, canvas.width, canvas.height);

    let mouse = { x: 0, y: 0 };
    let last_mouse = { x: 0, y: 0 };

    function dist(p1x: number, p1y: number, p2x: number, p2y: number) {
      return Math.sqrt(Math.pow(p2x - p1x, 2) + Math.pow(p2y - p1y, 2));
    }

    class Segment {
      pos: { x: number; y: number };
      l: number;
      ang: number;
      nextPos: { x: number; y: number };
      constructor(
        parent: { x: number; y: number; nextPos: { x: number; y: number } },
        l: number,
        a: number,
        first: boolean
      ) {
        if (first) {
          this.pos = {
            x: parent.x,
            y: parent.y,
          };
        } else {
          this.pos = {
            x: parent.nextPos.x,
            y: parent.nextPos.y,
          };
        }
        this.l = l;
        this.ang = a;
        this.nextPos = {
          x: this.pos.x + this.l * Math.cos(this.ang),
          y: this.pos.y + this.l * Math.sin(this.ang),
        };
      }
      update(t: { x: number; y: number }) {
        this.ang = Math.atan2(t.y - this.pos.y, t.x - this.pos.x);
        this.pos.x = t.x + this.l * Math.cos(this.ang - Math.PI);
        this.pos.y = t.y + this.l * Math.sin(this.ang - Math.PI);
        this.nextPos.x = this.pos.x + this.l * Math.cos(this.ang);
        this.nextPos.y = this.pos.y + this.l * Math.sin(this.ang);
      }
      fallback(t: { x: number; y: number }) {
        this.pos.x = t.x;
        this.pos.y = t.y;
        this.nextPos.x = this.pos.x + this.l * Math.cos(this.ang);
        this.nextPos.y = this.pos.y + this.l * Math.sin(this.ang);
      }
      show(c: CanvasRenderingContext2D) {
        c.lineTo(this.nextPos.x, this.nextPos.y);
      }
    }

    class Tentacle {
      x: number;
      y: number;
      l: number;
      n: number;
      t: { x: number; y: number };
      nextPos: { x: number; y: number };
      rand: number;
      segments: Segment[];
      constructor(x: number, y: number, l: number, n: number) {
        this.x = x;
        this.y = y;
        this.l = l;
        this.n = n;
        this.t = { x: 0, y: 0 };
        this.nextPos = { x: x, y: y };
        this.rand = Math.random();
        this.segments = [new Segment(this, this.l / this.n, 0, true)];
        for (let i = 1; i < this.n; i++) {
          this.segments.push(
            new Segment(
              { x, y, ...this.segments[i - 1] },
              this.l / this.n,
              0,
              false
            )
          );
        }
      }
      move(
        last_target: { x: number; y: number },
        target: { x: number; y: number }
      ) {
        const angle = Math.atan2(target.y - this.y, target.x - this.x);
        const dt = dist(last_target.x, last_target.y, target.x, target.y) + 5;
        this.t = {
          x: target.x - 0.8 * dt * Math.cos(angle),
          y: target.y - 0.8 * dt * Math.sin(angle),
        };
        if (this.t.x && this.t.y) {
          this.segments[this.n - 1].update(this.t);
        } else {
          this.segments[this.n - 1].update(target);
        }
        for (let i = this.n - 2; i >= 0; i--) {
          this.segments[i].update(this.segments[i + 1].pos);
        }
        if (
          dist(this.x, this.y, target.x, target.y) <=
          this.l + dist(last_target.x, last_target.y, target.x, target.y)
        ) {
          this.segments[0].fallback({ x: this.x, y: this.y });
          for (let i = 1; i < this.n; i++) {
            this.segments[i].fallback(this.segments[i - 1].nextPos);
          }
        }
      }
      show(c: CanvasRenderingContext2D, target: { x: number; y: number }) {
        if (dist(this.x, this.y, target.x, target.y) <= this.l) {
          c.globalCompositeOperation = "lighter";
          c.beginPath();
          c.lineTo(this.x, this.y);
          for (let i = 0; i < this.n; i++) {
            this.segments[i].show(c);
          }
          c.strokeStyle =
            "hsl(" +
            (this.rand * 60 + 180) +
            ",100%," +
            (this.rand * 60 + 25) +
            "%)";
          c.lineWidth = this.rand * 2;
          c.lineCap = "round";
          c.lineJoin = "round";
          c.stroke();
          c.globalCompositeOperation = "source-over";
        }
      }
      show2(c: CanvasRenderingContext2D, target: { x: number; y: number }) {
        c.beginPath();
        if (dist(this.x, this.y, target.x, target.y) <= this.l) {
          c.arc(this.x, this.y, 2 * this.rand + 1, 0, 2 * Math.PI);
          c.fillStyle = "white";
        } else {
          c.arc(this.x, this.y, this.rand * 2, 0, 2 * Math.PI);
          c.fillStyle = "darkcyan";
        }
        c.fill();
      }
    }

    const maxl = 300;
    const minl = 50;
    const n = 30;
    const numt = 500;
    const tent: Tentacle[] = [];
    let target = { x: 0, y: 0 };
    let last_target = { x: 0, y: 0 };
    let t = 0;
    const q = 10;

    for (let i = 0; i < numt; i++) {
      tent.push(
        new Tentacle(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * (maxl - minl) + minl,
          n
        )
      );
    }

    function draw() {
      if (!canvas || !c) return;

      if (mouse.x !== 0) {
        target.x += (mouse.x - target.x) / 10;
        target.y += (mouse.y - target.y) / 10;
      } else {
        target.x +=
          (canvas.width / 2 +
            ((canvas.height / 2 - q) * Math.sqrt(2) * Math.cos(t)) /
              (Math.pow(Math.sin(t), 2) + 1) -
            target.x) /
          10;
        target.y +=
          (canvas.height / 2 +
            ((canvas.height / 2 - q) *
              Math.sqrt(2) *
              Math.cos(t) *
              Math.sin(t)) /
              (Math.pow(Math.sin(t), 2) + 1) -
            target.y) /
          10;
      }

      t += 0.01;

      c.beginPath();
      c.arc(
        target.x,
        target.y,
        dist(last_target.x, last_target.y, target.x, target.y) + 5,
        0,
        2 * Math.PI
      );
      c.fillStyle = "hsl(210,100%,80%)";
      c.fill();

      for (let i = 0; i < numt; i++) {
        tent[i].move(last_target, target);
        tent[i].show2(c, target);
      }
      for (let i = 0; i < numt; i++) {
        tent[i].show(c, target);
      }
      last_target.x = target.x;
      last_target.y = target.y;
    }

    function loop() {
      if (!canvas || !c) return;

      requestAnimationFrame(loop);
      c.clearRect(0, 0, canvas.width, canvas.height);
      draw();
    }

    canvas.addEventListener(
      "mousemove",
      function (e) {
        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;

        mouse.x = e.clientX;
        mouse.y = e.clientY;
      },
      false
    );

    canvas.addEventListener("mouseleave", function () {
      mouse.x = 0;
      mouse.y = 0;
    });

    window.addEventListener("resize", resizeCanvas);

    loop();
  }, []);

  return <canvas className="w-full h-full" ref={canvasRef} />;
};

export default Monster;
