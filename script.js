gsap.to('.one', { duration: 1, delay: .8, x: '-100vw', ease: 'power2.in', opacity: 0 })
gsap.from('.two', { duration: 2, delay: .9, x: '-100vw', ease: 'power2.in', opacity: 0 })
gsap.from('.myImage', { duration: 2, delay: 1, y: '10vw', ease: 'power2.in', opacity: 0 })
gsap.from('.header', { duration: 2, delay: 2.2, y: '10vw', ease: 'power2.in', opacity: 0 })
gsap.from('.links', { duration: 2, delay: 2.4, y: '10vw', ease: 'power2.in', opacity: 0 })
gsap.from('.mobile', { duration: 2, delay: 2.4, y: '10vw', ease: 'power2.in', opacity: 0 })

gsap.from('h1', { duration: 2, delay: 1.5, x: '-100vw', ease: 'power2.in', opacity: 0 })


gsap.fromTo('.btn', { opacity: 0, scale: 0, rotation: 720 }, { duration: 1, delay: 4.3, opacity: 1, scale: 1, rotation: 0 })
