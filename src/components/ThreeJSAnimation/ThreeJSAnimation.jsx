"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeJSAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let camera, scene, renderer;
    let mesh, mesh2;

    const init = () => {
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(500, 500);
      renderer.setPixelRatio(2);
      containerRef.current.appendChild(renderer.domElement);

      scene = new THREE.Scene();
      camera = new THREE.OrthographicCamera(-10, 10, 10, -10, -10, 10);

      const texture = new THREE.TextureLoader().load(
        "textures/frontend_texture_white.png",
      );
      const texture2 = new THREE.TextureLoader().load(
        "textures/frontend_texture_middle.png",
      );

      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
      });
      const material2 = new THREE.MeshBasicMaterial({
        map: texture2,
        transparent: true,
      });

      const geometry = new THREE.SphereGeometry(9.98, 50, 50);
      mesh = new THREE.Mesh(geometry, material);

      const geometry2 = new THREE.SphereGeometry(10, 50, 50);
      mesh2 = new THREE.Mesh(geometry2, material2);

      mesh2.rotation.y = -Math.PI / 2;
      mesh.rotation.y = -Math.PI / 2;

      scene.add(mesh2);
      scene.add(mesh);

      window.addEventListener("resize", onWindowResize);
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("touchmove", onTouchMove, { passive: false });
      document.addEventListener("touchstart", onTouchMove, { passive: false });
    };

    const onWindowResize = () => {
      renderer.setSize(400, 400);
    };

    const onMouseMove = (event) => {
      const pos =
        (((360 * (event.clientX - window.innerWidth / 2)) / window.innerWidth) *
          Math.PI) /
          180 /
          2 -
        Math.PI / 2;
      const pos2 =
        (((360 * (event.clientY - window.innerHeight / 8)) /
          window.innerHeight) *
          Math.PI) /
          180 -
        Math.PI / 2;
      mesh2.rotation.y = -pos - Math.PI;
      mesh.rotation.y = pos;
      mesh2.rotation.x = pos2 / 10;
      mesh.rotation.x = pos2 / 10;
    };

    const onTouchMove = (event) => {
      event.preventDefault();
      const touch = event.targetTouches[0];
      const pos =
        (((360 * (touch.pageX - window.innerWidth / 2)) / window.innerWidth) *
          Math.PI) /
          180 /
          2 -
        Math.PI / 2;
      const pos2 =
        (((360 * (touch.pageY - window.innerHeight / 8)) / window.innerHeight) *
          Math.PI) /
          180 -
        Math.PI / 2;
      mesh2.rotation.y = -pos - Math.PI;
      mesh.rotation.y = pos;
      mesh2.rotation.x = pos2 / 10;
      mesh.rotation.x = pos2 / 10;
    };

    const animate = () => {
      requestAnimationFrame(animate);
      render();
    };

    const render = () => {
      renderer.render(scene, camera);
      mesh2.rotation.y -= 0.0009;
      mesh.rotation.y += 0.0009;
    };

    init();
    animate();

    return () => {
      window.removeEventListener("resize", onWindowResize);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchstart", onTouchMove);
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "600px",
        height: "600px",
        opacity: "0.75",
      }}
    ></div>
  );
};

export default ThreeJSAnimation;
