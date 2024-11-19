import { useEffect, useRef, useState } from "react";
import canvasImages from "./canvasimages";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Canvas({ details }) {
    const { startIndex, numImages, duration, size, top, left, zIndex } = details;
    const [index, setIndex] = useState({ value: startIndex });
    const canvasRef = useRef(null);

    useGSAP(() => {
        gsap.to(index, {
            value: startIndex + numImages - 1,
            duration: duration,
            ease: "linear",
            repeat: -1,
            onUpdate: () => {
                setIndex({ value: Math.round(index.value) });
            },
        });

        gsap.from(canvasRef.current, {
            opacity: 0, 
            duration: 0.5,
            ease: "power2.inOut"
        });
    });

    useEffect(() => {
        const scale = window.devicePixelRatio;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const image = new Image();
        image.src = canvasImages[index.value];
        image.onload = () => {
            canvas.width = canvas.offsetWidth * scale;
            canvas.height = canvas.offsetHeight * scale;
            canvas.style.width = canvas.offsetWidth + "px";
            canvas.style.height = canvas.offsetHeight + "px";
            ctx.scale = (scale, scale)
            ctx.drawImage(image, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
        };

    }, [index]);
    return (
        <canvas
            data-scroll
            data-scroll-speed={Math.random().toFixed(1)}
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: `${top}%`,
                left: `${left}%`,
                zIndex: zIndex,
                width: `${size * 1.8}px`,
                height: `${size * 1.8}px`
            }}
            id="canvas"
        ></canvas>

    );

}
export default Canvas




