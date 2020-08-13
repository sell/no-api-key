const fetch = require('node-fetch');
class api {
    constructor() {
        this.routes = [
            {
                route: `/trash`,
                params: [{name: `image`, optional: false}],
                call: `trash`,
                subDomain: `api` //optional
            },
            {
                route: `/animals/dog`,
                call: `dog`
            },
            {
                route: `/animals/cat`,
                call: `cat`
            },
            {
                route: `/animals/panda`,
                call: `panda`
            },
            {
                route: `/animals/bear`,
                call: `bear`
            },
            {
                route: `/color`,
                call: `color`,
                subDomain: `api`,
                params: [{
                    name: `hex`,
                    optional: true,
                    validate: (arg) => arg.startsWith("#") ? arg.slice(1) : arg
                }, {
                    name: `color`,
                    optional: true
                }]
            }
        ];
        this.routes.map((route) => {
            this[route.call] = async(args) => {
                if(!args) args = {};
                if(route.params) {
                    route.params.filter(x => x.optional == false).map((xd) => {
                        if(!args[xd.name]) throw new TypeError(`[NO-API-KEY] Argument ${xd.name} was not specified for method ${route.call}`)
                    })
                }
                return await fetch(
                    `https://${route.subDomain ? route.subDomain+"." : ""}no-api-key.com/api/v1${route.route}${
                        route.params ? route.params.map((p, i) => {
                            if(p.validate) {
                                if(args[p.name]) args[p.name] = p.validate(args[p.name]);
                            }
                            let added = [];
                            if(!added.length) {
                                added.push(p.name);
                                return p.optional && !args[p.name] ? `` : `?${p.name}=${args[p.name]}`;
                            } else {
                                added.push(p.name);
                                return p.optional && !args[p.name] ? `` : `&${p.name}=${args[p.name]}`
                            }
                        }).join("") : ""
                    }`
                ).then(res => res.json())
            }
        })
    }
}
module.exports = new api();