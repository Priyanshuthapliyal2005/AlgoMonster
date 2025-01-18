import React from "react";
import dynamic from "next/dynamic";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

export default function Tsunami() {
  const particles = [];
  const flowField = [];
  let cols, rows;
  const scl = 20; // Scale of each grid cell
  let zOffset = 0;

  class Particle {
    constructor(p5) {
      this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));
      this.vel = p5.createVector(0, 0);
      this.acc = p5.createVector(0, 0);
      this.maxSpeed = 5;
      this.alpha = 255;
      this.p5 = p5;
    }

    update() {
      this.vel.add(this.acc);
      this.vel.limit(this.maxSpeed);
      this.pos.add(this.vel);
      this.acc.mult(0); // Reset acceleration
    }

    follow(vectors) {
      const x = Math.floor(this.pos.x / scl);
      const y = Math.floor(this.pos.y / scl);
      const index = x + y * cols;
      const force = vectors[index];
      if (force) {
        this.applyForce(force);
      }
    }

    applyForce(force) {
      this.acc.add(force);
    }

    edges() {
      if (this.pos.x > this.p5.width) this.pos.x = 0;
      if (this.pos.x < 0) this.pos.x = this.p5.width;
      if (this.pos.y > this.p5.height) this.pos.y = 0;
      if (this.pos.y < 0) this.pos.y = this.p5.height;
    }

    show() {
      this.p5.stroke(0, 255, 0, this.alpha); // Green for particles
      this.p5.strokeWeight(2);
      this.p5.point(this.pos.x, this.pos.y);
    }
  }

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(
      document.getElementById("visualizer-container").offsetWidth,
      document.getElementById("visualizer-container").offsetHeight
    ).parent(canvasParentRef);

    cols = Math.floor(p5.width / scl);
    rows = Math.floor(p5.height / scl);

    for (let i = 0; i < 500; i++) {
      particles.push(new Particle(p5));
    }

    for (let i = 0; i < cols * rows; i++) {
      flowField[i] = p5.createVector(0, 0);
    }
  };

  const draw = (p5) => {
    p5.background(0, 100, 0); // Dark green background

    let yOffset = 0;
    for (let y = 0; y < rows; y++) {
      let xOffset = 0;
      for (let x = 0; x < cols; x++) {
        const angle = p5.noise(xOffset, yOffset, zOffset) * p5.TWO_PI * 4;
        const vector = p5.createVector(p5.cos(angle), p5.sin(angle));
        flowField[x + y * cols] = vector;
        xOffset += 0.1;

        // Optional: Draw the flow field as waves
        p5.stroke(150, 255, 150, 50); // Light green for wave flow
        p5.push();
        p5.translate(x * scl, y * scl);
        p5.rotate(vector.heading());
        p5.line(0, 0, scl, 0);
        p5.pop();
      }
      yOffset += 0.1;
    }
    zOffset += 0.02; // Increase zOffset for wave motion

    for (let particle of particles) {
      particle.follow(flowField);
      particle.update();
      particle.edges();
      particle.show();
    }
  };

  return <Sketch className="z-10" setup={setup} draw={draw} />;
}
