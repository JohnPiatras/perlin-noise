# Perlin Noise in Javascript

This is my attempt at implementing a perlin noise generator in Javascript.

It is based on the following articles:

https://gpfault.net/posts/perlin-noise.txt.html
http://eastfarthing.com/blog/2015-04-21-noise/
https://flafla2.github.io/2014/08/09/perlinnoise.html
https://www.shadertoy.com/view/4tGSzW

I'm not satisfied with the frequency parameter - it behaves like the period, and should probably be called that however, in flafla2 article it clear behaves like freqency in that large values give noisier results unlike my implementation,w here larger values give lower frequency results.