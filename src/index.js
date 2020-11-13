const axios = require('axios');
const routes = require('./routes');
class Api {
    /**
     * Image url
     * @param { string } image
     */
    constructor(image) {
        this.api = 'https://api.no-api-key.com';
        this.urlv1 = 'https://no-api-key.com/api/v1/';
        if (!image) throw new Error('Please provide a image url!')
        this.image = image;

        this.routes = routes.map(route => {
            route.endpoint = `${this.api}${route.endpoint}`;
            return route;
        });
        this.routes.map(route => {
            if (!route.name) throw new Error("Route isn't added to package yet!")
            this[route.name] = async () => {
                try {
                    return `${route.endpoint}?image=${this.image}`
                } catch (e) {
                    return e;
                }
            }
        })
    }

    /**
     * Animal Route
     * @param {string} animal
     * @return {Promise<any>}
     */
    async animals(animal) {
        if (!animal) throw new Error('Missing Animal Param')
        const animalRoute = await axios.get(`${this.urlv1}animals/${animal}`);
        return animalRoute.data;
    }

    /**
     * other route
     * @param {string} route
     * @return {Promise<void>}
     */
    async other(route) {
        if (!route) throw new Error('Missing Route Param');
        const otherRoute = await axios.get(`${this.urlv1}/${route}`);
        return otherRoute.data
    }

    /**
     * other route
     * @param { Array<string>} args
     * @return {Promise<void>}
     */

    async textBinary(args) {
        if (!args) throw new Error('Missing Args Param');
        if (!Array.isArray(args)) throw new Error("Args isn't an Array");
        const TextBinary = await axios.get(`${this.urlv1}binary?text=${args.join("%20")}`);
        return TextBinary.data
    }

    /**
     * other route
     * @param { Array<string>} args
     * @return { Promise<void> }
     */

    async binaryText(args) {
        if (!args) throw new Error('Missing Args Param');
        if (!Array.isArray(args)) throw new Error("Args isn't an Array");
        const binaryText = await axios.get(`${this.urlv1}binary-text?binary=${args.join("%20")}`);
        return binaryText.data
    }

    /**
     * other route
     * @param { Array<string>} args
     * @return { Promise<void> }
     */

    async flipText(args) {
        if (!args) throw new Error('Missing Args Param');
        if (!Array.isArray(args)) throw new Error("Args isn't an Array");
        const FlipText = await axios.get(`${this.urlv1}flip-text?text=${args.join("%20")}`);
        return FlipText.data
    }

    /**
     * other route
     * @param { number = 16 } length
     * @return { Promise<void> }
     */

    async password(length) {
        if (length && typeof length != "number") throw new Error('Length has to be a number!');
        const Password = await axios.get(`${this.urlv1}password?length=${length ? length : 16}`);
        return Password.data
    }

}

module.exports = { Api }
