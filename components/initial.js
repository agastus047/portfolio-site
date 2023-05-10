import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { gsap } from "gsap";
import { useEffect } from "react";
import { useRef } from "react";

function Initial() {

    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const parent = useRef(null);
    const name = useRef(null);
    const desc = useRef(null);
    const scrollIcon = useRef(null);

    useEffect(() => {

        let ctx = gsap.context(()=> {

            let t1 = gsap.timeline();

            t1.fromTo(name.current, 
                {
                    opacity:0,
                    y:20
                },
                {
                    opacity:1,
                    y:0,
                    duration:0.5,
                    ease:"none",
                    delay:0.5
                }
            );
            t1.fromTo(desc.current,
                {
                    opacity:0,
                    y:20
                },
                {
                    opacity:1,
                    y:0,
                    duration:0.5,
                    ease:"none"
                }
            );
            t1.fromTo(scrollIcon.current,
                {
                    opacity:0,
                    y:20
                },
                {
                    opacity:1,
                    y:0,
                    duration:0.5,
                    ease:"none"
                }
            );
            t1.to(scrollIcon.current,
                {
                    opacity:0.4,
                    repeat:-1,
                    yoyo:true,
                    duration:1
                }
            ); 
        },parent);

        return () => ctx.revert();

    },[]);

    return(
        <div ref={parent} className="relative h-screen">
            {/* <div ref={name} className="text-white absolute text-5xl sm:text-8xl top-[35%] left-[18%] sm:left-[23%]">AGASTUS JOYSON</div> */}
            {/* <div ref={name} className="text-white absolute text-5xl sm:text-8xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">AGASTUS JOYSON</div>
            <div ref={desc} className="text-white absolute text-xl sm:text-3xl font-medium top-[53%] sm:top-1/2 left-[13%] sm:left-[23%] italic">FRONT END DEVELOPER</div> */}
            <div className="text-white absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] sm:w-max">
                <div ref={name} className="text-5xl sm:text-8xl mb-5">AGASTUS JOYSON</div>
                <div ref={desc} className="text-xl sm:text-3xl font-medium italic w-max">FRONT END DEVELOPER</div>
            </div>
            <div ref={scrollIcon} className="text-white sm:text-xl font-medium absolute left-1/2 translate-x-[-50%] bottom-[15%] sm:bottom-[10%]">Scroll <span className="pi pi-angle-double-down"></span></div>
            <Particles
      id="tsparticles"
      init={particlesInit}
      //added h-full to parent div of canvas
      className="h-full"
      options={{
        "fullScreen": {
            "enable": false,
            "zIndex": 0
        },
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#fff"
            },
            "shape": {
                "type": "circle",
                "options": {
                    "sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "rotate": {
                "value": 0,
                "random": true,
                "direction": "clockwise",
                "animation": {
                    "enable": true,
                    "speed": 5,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": ["grab"]
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 300,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "background": {
            "color": "#111",
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
        }
    }}
    />
        </div>
    );
}

export default Initial;