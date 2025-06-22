
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

interface SilkProps {
  speed?: number;
  scale?: number;
  noise?: number;
  rotation?: number;
  backgroundColor?: string;
}

const Silk: React.FC<SilkProps> = ({
  speed = 0.2,
  scale = 1.0,
  noise = 4.0,
  rotation = 0.0,
  backgroundColor = '#7B7481'
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  // Simplified fragment shader for better performance
  const fragmentShader = `
    uniform float uTime;
    uniform float uSpeed;
    uniform float uScale;
    uniform float uNoise;
    uniform vec3 uBackgroundColor;
    varying vec2 vUv;

    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }

    float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    void main() {
      vec2 st = vUv * uScale;
      float time = uTime * uSpeed;
      
      // Simplified pattern
      float pattern = noise(st + time * 0.1);
      pattern += noise(st * 2.0 + time * 0.05) * 0.5;
      
      // Create gradient effect
      vec3 color1 = uBackgroundColor * 0.8;
      vec3 color2 = uBackgroundColor * 1.1;
      
      vec3 finalColor = mix(color1, color2, pattern);
      
      gl_FragColor = vec4(finalColor, 0.3);
    }
  `;

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uSpeed: { value: speed },
    uScale: { value: scale },
    uNoise: { value: noise },
    uBackgroundColor: { value: new THREE.Color(backgroundColor) }
  }), [speed, scale, noise, backgroundColor]);

  useFrame((state) => {
    if (meshRef.current) {
      uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef} scale={[2, 2, 1]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

interface SilkShaderProps {
  speed?: number;
  scale?: number;
  noise?: number;
  rotation?: number;
  backgroundColor?: string;
  className?: string;
}

const SilkShader: React.FC<SilkShaderProps> = ({
  speed = 0.15,
  scale = 1.5,
  noise = 2.0,
  rotation = 0.0,
  backgroundColor = '#64748b',
  className = ''
}) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        dpr={[0.5, 1]}
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{ background: 'transparent' }}
        performance={{ min: 0.5 }}
        frameloop="demand"
      >
        <Silk 
          speed={speed}
          scale={scale}
          noise={noise}
          rotation={rotation}
          backgroundColor={backgroundColor}
        />
      </Canvas>
    </div>
  );
};

export default SilkShader;
