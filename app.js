var redis = require('redis'),
cliente   = redis.createClient();

// Si queremos seleccionar la base de datos 3 en vez de 0 (por defecto)
// cliente.select(3, function() { /* ... */ });

cliente.on('error', function (err) {
    console.log('Error ' + err);
});


// Strings ===============================
cliente.set('node_redis:String', 'hola Mundo!', redis.print);
cliente.get('node_redis:String', redis.print);


// Hashes ================================
cliente.hmset('node_redis:Hash', 'Nombre', 'Juan', 'Apellido', 'Perez', redis.print);
cliente.hgetall("node_redis:Hash", function (obj) {
    console.log(obj);
});


// Lists =================================
for (var i = 0; i <= 5; i++) {
    cliente.rpush('node_redis:List', 'Valor ' + i, redis.print);
};


// Sets ==================================
cliente.sadd('node_redis:Set:Set1', 'Hola', redis.print);
cliente.sadd('node_redis:Set:Set1', 'Mundo', redis.print);
cliente.sadd('node_redis:Set:Set2', 'Mundo', redis.print);
cliente.sadd('node_redis:Set:Set2', 'Maravilloso', redis.print);
cliente.sinter('node_redis:Set:Set1', 'node_redis:Set:Set2', redis.print);
cliente.sunion('node_redis:Set:Set1', 'node_redis:Set:Set2', redis.print);


// Sorted sets ===========================
cliente.zadd('node_redis:SortedSet', 1, 'Uno', redis.print);
cliente.zadd('node_redis:SortedSet', 2, 'Dos', redis.print);
cliente.zadd('node_redis:SortedSet', 3, 'Tres', redis.print);
cliente.zrange('node_redis:SortedSet', 0, -1, redis.print);

cliente.quit();
