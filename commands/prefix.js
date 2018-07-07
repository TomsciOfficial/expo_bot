var fs = require('fs'); //FileSystem
let conf = JSON.parse(fs.readFileSync("./config.json", "utf8")); //Config file

exports.run = (client, message, args) => { //Collecting info about command
    message.channel.send({
        embed: {
            "title": "***Префикс***",
            "description": "Текущий префикс - " + conf.prefix,
            "color": 16098851,
            "timestamp": "1337-01-01T02:28:00",
            "footer": {
                "text": conf.prefix + "prefix"
            },
            "fields": [{
                    "name": `Сменить префикс`,
                    "value": conf.prefix + "settings prefix (prefix)"
                }
            ]
        }
    })
}