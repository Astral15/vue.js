import getters from "./getters"

const buttonsModule = {
    state(){
        return {
            button_classes: {
                add: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
                remove: "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            }
        }
    },
    getters
}

export default buttonsModule