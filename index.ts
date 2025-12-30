const server = Bun.serve({
port: process.env.PORT ?? 3000,
async fetch(request) {
    return new Response("Hello World");
},

});

console.log(`Server is running on ${server.url}`);
