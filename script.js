    MinecraftAPI.getServerStatus('sunrise.craft.gg', {
        port: 10008 // spécifiez le port si différent de 25565
    }, function (err, status) {
        document.getElementById('lastUpdated').innerHTML = new Date(status.last_updated * 1000).toLocaleString();
        document.getElementById('serverProtocol').innerHTML = status.server.protocol;
        document.getElementById('serverVersion').innerHTML = status.server.name;
        
        var playersInfo = status.players.now + '/' + status.players.max;
        document.getElementById('playersInfo').innerHTML = playersInfo;

        document.getElementById('online').innerHTML = status.online ? 'Oui' : 'Non';
    });
