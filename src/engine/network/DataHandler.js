import PluginManager from './plugins/PluginManager'


export default class DataHandler {

    constructor(network) {
        this.network = network

        this.plugins = new PluginManager(network)
    }

    handle(message) {
        try {
            //if (true) {
            //    console.log('Message received:', message.action, message.args)
            //}
            console.log("DataHandler Message Received " + message.action)

            this.network.events.emit(message.action, message.args)

        } catch(error) {
            console.error(error)
        }
    }

}
