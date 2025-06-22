
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
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

  const fragmentShader = `
    uniform float uTime;
    uniform float uSpeed;
    uniform float uScale;
    uniform float uNoise;
    uniform float uRotation;
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

    float fbm(vec2 st) {
      float value = 0.0;
      float amplitude = 0.5;
      float frequency = 1.0;
      for(int i = 0; i < 6; i++) {
        value += amplitude * noise(st * frequency);
        frequency *= 2.0;
        amplitude *= 0.5;
      }
      return value;
    }

    void main() {
      vec2 st = vUv * uScale;
      
      // Apply rotation
      float cosR = cos(uRotation);
      float sinR = sin(uRotation);
      mat2 rotMatrix = mat2(cosR, -sinR, sinR, cosR);
      st = rotMatrix * (st - 0.5) + 0.5;
      
      float time = uTime * uSpeed;
      
      // Create flowing silk pattern
      vec2 flow1 = vec2(
        fbm(st + vec2(time * 0.1, time * 0.05)),
        fbm(st + vec2(time * 0.05, time * 0.1))
      );
      
      vec2 flow2 = vec2(
        fbm(st + flow1 + vec2(time * 0.08, -time * 0.06)),
        fbm(st + flow1 + vec2(-time * 0.06, time * 0.08))
      );
      
      float pattern = fbm(st + flow2 * uNoise);
      
      // Create silk-like undulation
      float wave1 = sin(st.x * 10.0 + time) * 0.1;
      float wave2 = cos(st.y * 8.0 + time * 0.8) * 0.1;
      pattern += wave1 + wave2;
      
      // Smooth the pattern
      pattern = smoothstep(0.0, 1.0, pattern);
      
      // Create gradient effect
      vec3 color1 = uBackgroundColor * 0.6;
      vec3 color2 = uBackgroundColor * 1.2;
      vec3 color3 = uBackgroundColor * 0.8;
      
      vec3 finalColor = mix(color1, color2, pattern);
      finalColor = mix(finalColor, color3, sin(pattern * 3.14159) * 0.5 + 0.5);
      
      // Add subtle transparency based on pattern
      float alpha = 0.7 + pattern * 0.3;
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;

  const uniforms = useRef({
    uTime: { value: 0 },
    uSpeed: { value: speed },
    uScale: { value: scale },
    uNoise: { value: noise },
    uRotation: { value: rotation },
    uBackgroundColor: { value: new THREE.Color(backgroundColor) }
  });

  useFrame((state) => {
    if (meshRef.current) {
      uniforms.current.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef} scale={[2, 2, 1]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms.current}
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
  speed = 0.2,
  scale = 1.0,
  noise = 4.0,
  rotation = 0.0,
  backgroundColor = '#7B7481',
  className = ''
}) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{ background: 'transparent' }}
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
